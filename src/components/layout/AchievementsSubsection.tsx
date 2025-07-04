import { achievements } from "@/app/config";
import Link from "next/link";
import { GiAchievement } from 'react-icons/gi';

export default function AchievementsSection() {
  
  const colorMap: Record<number, string> = {
    1: 'text-yellow-500',  
    2: 'text-gray-400',    
    3: 'text-orange-500',   
  };

  return (
    <section className='relative bg-black py-20'>
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
                .filter(achievement => achievement.isStarred)
                .map((achievement) => {
                  const color =
                    achievement.position && colorMap[achievement.position]
                      ? colorMap[achievement.position]
                      : 'text-white';

                  return (
                    <div
                      key={achievement.title}
                      className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'
                    >
                      <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20'>
                        <GiAchievement
                          className={`h-10 w-10 ${color} hover:brightness-125 transition-all duration-1000`}
                        />
                      </div>
                      <h3 className='mb-2 text-xl font-semibold text-white'>
                        {achievement.title}
                      </h3>
                      <p className='mb-2 text-yellow-400'>{achievement.level}</p>
                      <p className='text-sm text-gray-300'>
                        {achievement.description}
                      </p>
                      {achievement.category && (
                        <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-blue-600/20 text-blue-300">
                          {achievement.category}
                        </span>
                      )}
                    </div>
                  );
                })}
            </div>
          )}

          <Link href="/achievements">
            <button className='mt-8 hover:scale-95 hover:cursor-pointer rounded bg-gradient-to-br from-purple-500 to-indigo-500 px-4 py-2 text-white'>
              Show All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
