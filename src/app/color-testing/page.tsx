'use client';
import { Suspense } from 'react';
import AchievementsSection from '@/components/layout/AchievementsSubsection';
import ProjectsSubsection from '@/components/layout/ProjectsSubsection';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Dither from '@/components/Dither';

function HeroSection() {
  // const [disableAnimation, setDisableAnimation] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const updateTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const [waveSpeed, setWaveSpeed] = useState(() =>
    parseFloat(searchParams.get('waveSpeed') || '0.02')
  );
  const [waveFrequency, setWaveFrequency] = useState(() =>
    parseFloat(searchParams.get('waveFrequency') || '2.5')
  );
  const [waveAmplitude, setWaveAmplitude] = useState(() =>
    parseFloat(searchParams.get('waveAmplitude') || '0.4')
  );
  const [colorR, setColorR] = useState(() =>
    parseFloat(searchParams.get('colorR') || '0.2')
  );
  const [colorG, setColorG] = useState(() =>
    parseFloat(searchParams.get('colorG') || '0.1')
  );
  const [colorB, setColorB] = useState(() =>
    parseFloat(searchParams.get('colorB') || '0.3')
  );
  const [colorNum, setColorNum] = useState(() =>
    parseInt(searchParams.get('colorNum') || '6')
  );
  const [pixelSize, setPixelSize] = useState(() =>
    parseInt(searchParams.get('pixelSize') || '3')
  );

  // Debounced URL update function
  const debouncedUpdateURL = useCallback(() => {
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }

    updateTimeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams();
      params.set('waveSpeed', waveSpeed.toString());
      params.set('waveFrequency', waveFrequency.toString());
      params.set('waveAmplitude', waveAmplitude.toString());
      params.set('colorR', colorR.toString());
      params.set('colorG', colorG.toString());
      params.set('colorB', colorB.toString());
      params.set('colorNum', colorNum.toString());
      params.set('pixelSize', pixelSize.toString());

      router.replace(`${window.location.pathname}?${params.toString()}`, {
        scroll: false,
      });
    }, 300); // 300ms debounce
  }, [
    waveSpeed,
    waveFrequency,
    waveAmplitude,
    colorR,
    colorG,
    colorB,
    colorNum,
    pixelSize,
    router,
  ]);

  useEffect(() => {
    debouncedUpdateURL();

    // Cleanup timeout on unmount
    return () => {
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }
    };
  }, [debouncedUpdateURL]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDisableAnimation(true);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section className='relative min-h-screen overflow-hidden bg-gray-900'>
      {/* Dithered Waves Background */}
      <div className='fixed inset-0 z-0'>
        <Dither
          waveSpeed={waveSpeed}
          waveFrequency={waveFrequency}
          waveAmplitude={waveAmplitude}
          waveColor={[colorR, colorG, colorB]}
          colorNum={colorNum}
          pixelSize={pixelSize}
          disableAnimation={false} // Replace with disableAnimation if needed
          enableMouseInteraction={false}
        />
      </div>

      {/* Overlay for better text contrast */}
      <div className='absolute inset-0 z-10 bg-black/30'></div>

      {/* Hero Content */}
      <div className='relative z-20 pt-16'>
        <div className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
          <div className='flex min-h-[80vh] flex-col items-center justify-center text-center'>
            <div className='mb-8'>
              <h1 className='font-agency-fb mb-6 text-5xl font-bold text-white drop-shadow-lg md:text-7xl lg:text-8xl'>
                Club of ProgrammerS
              </h1>
              <div className='mb-2 font-mono text-xl text-purple-100 drop-shadow-md md:text-2xl'>
                Indian Institute of Technology (BHU) Varanasi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Panel */}
      <div className='fixed right-4 bottom-4 z-30'>
        <button
          onClick={() => setShowControls(!showControls)}
          className='mb-4 rounded-lg bg-purple-600 px-4 py-2 text-white shadow-lg transition-colors hover:bg-purple-700'
        >
          {showControls ? 'Hide Controls' : 'Show Controls'}
        </button>

        {showControls && (
          <div className='max-w-sm rounded-lg bg-black/80 p-6 text-white shadow-xl backdrop-blur-sm'>
            <h3 className='mb-4 text-lg font-bold text-purple-300'>
              Dither Controls
            </h3>

            <div className='space-y-4'>
              <div>
                <label className='mb-1 block text-sm text-purple-200'>
                  Wave Speed: {waveSpeed.toFixed(3)}
                </label>
                <input
                  type='range'
                  min='0'
                  max='0.1'
                  step='0.001'
                  value={waveSpeed}
                  onChange={(e) => setWaveSpeed(parseFloat(e.target.value))}
                  className='w-full'
                />
              </div>

              <div>
                <label className='mb-1 block text-sm text-purple-200'>
                  Wave Frequency: {waveFrequency.toFixed(1)}
                </label>
                <input
                  type='range'
                  min='0.5'
                  max='10'
                  step='0.1'
                  value={waveFrequency}
                  onChange={(e) => setWaveFrequency(parseFloat(e.target.value))}
                  className='w-full'
                />
              </div>

              <div>
                <label className='mb-1 block text-sm text-purple-200'>
                  Wave Amplitude: {waveAmplitude.toFixed(2)}
                </label>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={waveAmplitude}
                  onChange={(e) => setWaveAmplitude(parseFloat(e.target.value))}
                  className='w-full'
                />
              </div>

              <div>
                <label className='mb-1 block text-sm text-purple-200'>
                  Color Red: {colorR.toFixed(2)}
                </label>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={colorR}
                  onChange={(e) => setColorR(parseFloat(e.target.value))}
                  className='w-full'
                />
              </div>

              <div>
                <label className='mb-1 block text-sm text-purple-200'>
                  Color Green: {colorG.toFixed(2)}
                </label>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={colorG}
                  onChange={(e) => setColorG(parseFloat(e.target.value))}
                  className='w-full'
                />
              </div>

              <div>
                <label className='mb-1 block text-sm text-purple-200'>
                  Color Blue: {colorB.toFixed(2)}
                </label>
                <input
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={colorB}
                  onChange={(e) => setColorB(parseFloat(e.target.value))}
                  className='w-full'
                />
              </div>

              <div>
                <label className='mb-1 block text-sm text-purple-200'>
                  Color Num: {colorNum}
                </label>
                <input
                  type='range'
                  min='2'
                  max='20'
                  step='1'
                  value={colorNum}
                  onChange={(e) => setColorNum(parseInt(e.target.value))}
                  className='w-full'
                />
              </div>

              <div>
                <label className='mb-1 block text-sm text-purple-200'>
                  Pixel Size: {pixelSize}
                </label>
                <input
                  type='range'
                  min='1'
                  max='10'
                  step='1'
                  value={pixelSize}
                  onChange={(e) => setPixelSize(parseInt(e.target.value))}
                  className='w-full'
                />
              </div>

              <div className='pt-4'>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('URL copied to clipboard!');
                  }}
                  className='w-full rounded bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700'
                >
                  Copy Share URL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home2() {
  return (
    <div className='min-h-screen'>
      <Suspense
        fallback={<div className='min-h-screen animate-pulse bg-gray-900' />}
      >
        <HeroSection />
      </Suspense>
      <AchievementsSection />
      <ProjectsSubsection />
    </div>
  );
}
