'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import * as React from 'react';
import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';

// A simple vertex shader to pass UV coordinates to the fragment shader.
const waveVertexShader = `
  precision highp float;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// A single, combined fragment shader that handles wave generation, pixelation,
// and dithering in one pass for maximum performance.
const combinedFragmentShader = `
  precision highp float;
  varying vec2 vUv;

  // Uniforms from both original shaders
  uniform vec2 resolution;
  uniform float time;
  uniform float waveSpeed;
  uniform float waveFrequency;
  uniform float waveAmplitude;
  uniform vec3 waveColor;
  uniform vec2 mousePos;
  uniform int enableMouseInteraction;
  uniform float mouseRadius;
  uniform float colorNum;
  uniform float pixelSize;

  // --- Noise functions (classic Perlin/Simplex noise implementation) ---
  vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

  float cnoise(vec2 P) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
    Pi = mod289(Pi);
    vec4 ix = Pi.xzxz; vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz; vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x, gy.x); vec2 g10 = vec2(gx.y, gy.y);
    vec2 g01 = vec2(gx.z, gy.z); vec2 g11 = vec2(gx.w, gy.w);
    vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
    g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x)); float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z)); float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
  }

  // --- Fractal Brownian Motion with reduced octaves for performance ---
  const int OCTAVES = 4; // Reduced from 8 for major performance gain
  float fbm(vec2 p) {
    float value = 0.0;
    float amp = 1.0;
    float freq = waveFrequency;
    for (int i = 0; i < OCTAVES; i++) {
      value += amp * abs(cnoise(p));
      p *= freq;
      amp *= waveAmplitude;
    }
    return value;
  }

  // --- Dithering function using a Bayer matrix ---
  const float bayerMatrix8x8[64] = float[64](
    0.0, 48.0, 12.0, 60.0, 3.0, 51.0, 15.0, 63.0,
    32.0, 16.0, 44.0, 28.0, 35.0, 19.0, 47.0, 31.0,
    8.0, 56.0, 4.0, 52.0, 11.0, 59.0, 7.0, 55.0,
    40.0, 24.0, 36.0, 20.0, 43.0, 27.0, 39.0, 23.0,
    2.0, 50.0, 14.0, 62.0, 1.0, 49.0, 13.0, 61.0,
    34.0, 18.0, 46.0, 30.0, 33.0, 17.0, 45.0, 29.0,
    10.0, 58.0, 6.0, 54.0, 9.0, 57.0, 5.0, 53.0,
    42.0, 26.0, 38.0, 22.0, 41.0, 25.0, 37.0, 21.0
  );

  vec3 dither(vec2 screenCoord, vec3 color) {
    vec2 scaledCoord = floor(screenCoord / pixelSize);
    int x = int(mod(scaledCoord.x, 8.0));
    int y = int(mod(scaledCoord.y, 8.0));
    // We divide by 64.0 to normalize the matrix values to the [0, 1] range
    float threshold = bayerMatrix8x8[y * 8 + x] / 64.0 - 0.5;
    float step = 1.0 / (colorNum - 1.0);
    return floor(color / step + threshold + 0.5) * step;
  }

  void main() {
    // 1. PIXELATION: Calculate UV for the blocky 'pixel' this fragment belongs to.
    vec2 pixelatedUV = floor(vUv * resolution / pixelSize) * pixelSize / resolution;

    // 2. WAVE CALCULATION: Use the pixelated UV to keep the wave pattern constant across each pixel block.
    vec2 p = pixelatedUV - 0.5;
    p.x *= resolution.x / resolution.y;
    
    // Simplified pattern calculation for performance.
    vec2 p2 = p - time * waveSpeed;
    float f = fbm(p + fbm(p2));

    // Optional mouse interaction.
    if (enableMouseInteraction == 1) {
      vec2 mouseNDC = (mousePos / resolution - 0.5) * vec2(1.0, -1.0);
      mouseNDC.x *= resolution.x / resolution.y;
      float dist = length(p - mouseNDC);
      float effect = 1.0 - smoothstep(0.0, mouseRadius, dist);
      f -= 0.5 * effect;
    }
    vec3 waveCol = mix(vec3(0.0), waveColor, f);

    // 3. DITHERING: Apply the dither pattern to the final wave color.
    vec3 ditheredColor = dither(gl_FragCoord.xy, waveCol);
    
    gl_FragColor = vec4(ditheredColor, 1.0);
  }
`;

// Memoized component to prevent re-renders unless props change.
const PerformanceDitheredWaves = React.memo((props: any) => {
  const {
    waveSpeed,
    waveFrequency,
    waveAmplitude,
    waveColor,
    colorNum,
    pixelSize,
    disableAnimation,
    enableMouseInteraction,
    mouseRadius,
  } = props;

  const mesh = useRef<THREE.Mesh>(null);
  const { size, gl, viewport } = useThree();

  // Use a single ref for all uniforms to prevent them from being recreated on every render.
  const uniformsRef = useRef({
    time: { value: 0 },
    resolution: { value: new THREE.Vector2() },
    waveSpeed: { value: waveSpeed },
    waveFrequency: { value: waveFrequency },
    waveAmplitude: { value: waveAmplitude },
    waveColor: { value: new THREE.Color(...waveColor) },
    mousePos: { value: new THREE.Vector2() },
    enableMouseInteraction: { value: enableMouseInteraction ? 1 : 0 },
    mouseRadius: { value: mouseRadius },
    colorNum: { value: colorNum },
    pixelSize: { value: pixelSize },
  });

  // Update resolution only when canvas size changes.
  useEffect(() => {
    const dpr = gl.getPixelRatio();
    uniformsRef.current.resolution.value.set(
      size.width * dpr,
      size.height * dpr
    );
  }, [size, gl]);

  // Use targeted useEffect hooks to update uniforms only when specific props change.
  useEffect(() => {
    uniformsRef.current.waveSpeed.value = waveSpeed;
  }, [waveSpeed]);
  useEffect(() => {
    uniformsRef.current.waveFrequency.value = waveFrequency;
  }, [waveFrequency]);
  useEffect(() => {
    uniformsRef.current.waveAmplitude.value = waveAmplitude;
  }, [waveAmplitude]);
  useEffect(() => {
    uniformsRef.current.waveColor.value.set(...waveColor);
  }, [waveColor]);
  useEffect(() => {
    uniformsRef.current.colorNum.value = colorNum;
  }, [colorNum]);
  useEffect(() => {
    uniformsRef.current.pixelSize.value = pixelSize;
  }, [pixelSize]);
  useEffect(() => {
    uniformsRef.current.mouseRadius.value = mouseRadius;
  }, [mouseRadius]);
  useEffect(() => {
    uniformsRef.current.enableMouseInteraction.value = enableMouseInteraction
      ? 1
      : 0;
  }, [enableMouseInteraction]);

  // Update time uniform on every frame for animation.
  useFrame(({ clock }) => {
    if (!disableAnimation) {
      uniformsRef.current.time.value = clock.getElapsedTime();
    }
  });

  // Most efficient mouse handler: listen to global mouse events to avoid z-index issues.
  useEffect(() => {
    if (!enableMouseInteraction) return;
    
    const handleGlobalPointerMove = (e: PointerEvent) => {
      const dpr = gl.getPixelRatio();
      uniformsRef.current.mousePos.value.x = e.clientX * dpr;
      // We need to invert Y for shader coordinates
      uniformsRef.current.mousePos.value.y = (e.clientY) * dpr;
    };

    // Add global event listener
    document.addEventListener('pointermove', handleGlobalPointerMove);
    
    // Cleanup
    return () => {
      document.removeEventListener('pointermove', handleGlobalPointerMove);
    };
  }, [enableMouseInteraction, gl, size]);

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    // Keep this for backward compatibility, but the global listener above handles most cases
    if (!enableMouseInteraction) return;
    const dpr = gl.getPixelRatio();
    uniformsRef.current.mousePos.value.x = e.clientX * dpr;
    // We need to invert Y for shader coordinates
    uniformsRef.current.mousePos.value.y = (size.height - e.clientY) * dpr;
  };

  return (
    <mesh
      ref={mesh}
      scale={[viewport.width, viewport.height, 1]}
      onPointerMove={handlePointerMove}
    >
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={waveVertexShader}
        fragmentShader={combinedFragmentShader}
        uniforms={uniformsRef.current}
      />
    </mesh>
  );
});

PerformanceDitheredWaves.displayName = 'PerformanceDitheredWaves';

interface DitherProps {
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
  waveColor?: [number, number, number];
  colorNum?: number;
  pixelSize?: number;
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
}

export default function Dither({
  waveSpeed = 0.05,
  waveFrequency = 3,
  waveAmplitude = 0.3,
  waveColor = [0.1, 0.2, 0.9], // Example: a nice blue
  colorNum = 4,
  pixelSize = 3,
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.5,
}: DitherProps) {
  return (
    <Canvas
      className='relative h-full w-full'
      camera={{ position: [0, 0, 1] }}
      // PERFORMANCE: Clamp DPR for huge performance gains on retina screens.
      dpr={[1, 1.5]}
      // PERFORMANCE: Disable default antialiasing and request a high-performance context.
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      <PerformanceDitheredWaves
        waveSpeed={waveSpeed}
        waveFrequency={waveFrequency}
        waveAmplitude={waveAmplitude}
        waveColor={waveColor}
        colorNum={colorNum}
        pixelSize={pixelSize}
        disableAnimation={disableAnimation}
        enableMouseInteraction={enableMouseInteraction}
        mouseRadius={mouseRadius}
      />
    </Canvas>
  );
}
