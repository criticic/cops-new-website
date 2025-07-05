import { achievements } from '@/app/config';
import Link from 'next/link';
import { GiAchievement } from 'react-icons/gi';

export default function AchievementsSection() {
  const colorMap: Record<number, string> = {
    1: 'text-[#FFD700]', // Gold color
    2: 'text-[#C0C0C0]', // Silver color
    3: 'text-[#CD7F32]', // Bronze color
  };

  return (
    <section className='relative py-20'>
      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
            Achievements Section
          </h2>

          {achievements.length === 0 ? (
            <p className='text-lg text-gray-400'>Content coming soon...</p>
          ) : (
            <div className='mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
              {achievements
                .filter((achievement) => achievement.isStarred)
                .map((achievement) => {
                  const color =
                    achievement.position && colorMap[achievement.position]
                      ? colorMap[achievement.position]
                      : 'text-white';

                  return (
                    <div
                      key={achievement.title}
                      className='rounded-lg border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-lg'
                    >
                      <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20'>
                        <GiAchievement
                          className={`h-10 w-10 ${color} transition-all duration-1000 hover:brightness-125`}
                        />
                      </div>
                      <h3 className='mb-2 text-xl font-semibold text-white'>
                        {achievement.title}
                      </h3>
                      <p className='mb-2 text-yellow-400'>
                        {achievement.level}
                      </p>
                      <p className='text-sm text-gray-300'>
                        {achievement.description}
                      </p>
                      {achievement.category && (
                        <span className='mt-3 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300'>
                          {achievement.category}
                        </span>
                      )}
                    </div>
                  );
                })}
            </div>
          )}

          <Link href='/achievements'>
            <button className='mt-8 rounded bg-gradient-to-br from-purple-500 to-indigo-500 px-4 py-2 text-white hover:scale-95 hover:cursor-pointer'>
              Show All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
