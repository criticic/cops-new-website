'use client';

import { useState, useEffect } from 'react';
import Dither from '@/components/Dither';

export default function HeroSection() {
  const [disableAnimation, setDisableAnimation] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisableAnimation(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='relative min-h-screen overflow-hidden bg-gray-900'>
      {/* Dithered Waves Background */}
      <div className='absolute inset-0 z-0'>
        <Dither
          waveSpeed={0.019}
          waveFrequency={3.8}
          waveAmplitude={0.3}
          waveColor={[0.44,0.53 , 0.53]}
          colorNum={6}
          pixelSize={4}
          disableAnimation={disableAnimation}
          enableMouseInteraction={false}
        />
      </div>

      <div className='absolute inset-0 z-10 bg-black/30'></div>

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
    </section>
  );
}