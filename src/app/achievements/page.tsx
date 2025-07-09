import AchievementsTimeline from '@/components/AchievementTimeline';

export default function AchievementsPage() {

  return (
    <div className='min-h-screen'>
      <div className='relative z-20 pt-32 pb-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='ml-2'>
            <div className='mb-12 text-center'>
              <h1 className='mb-4 text-4xl font-bold text-white md:text-6xl'>
                Our <span className='bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent'>Achievements</span>
              </h1>
            </div>

            {/* Awards Section */}
            <div className='mb-16 flex flex-col items-center'>
              <h2 className='mb-12 text-center text-2xl font-bold text-white'>
                Awards & Recognition
              </h2>
              {/* <AccordionDemo /> */}
              <AchievementsTimeline/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
