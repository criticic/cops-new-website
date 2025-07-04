import { achievements } from "@/app/config";
import Link from "next/link";

export default function AchievementsSection() {
  return (
    <section className='relative bg-black py-20'>
      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
            Achievements Section
          </h2>
          {achievements.length === 0 ? (<p className='text-lg text-gray-400'>Content coming soon...</p>) : (
            <div className='mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
              {achievements.filter(achievement => achievement.isStarred).map((achievement) => (
                <div key={achievement.title} className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
                  <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20'>
                    <svg
                      className='h-8 w-8 text-yellow-500'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                    </svg>
                  </div>
                  <h3 className='mb-2 text-xl font-semibold text-white'>
                    {achievement.title}
                  </h3>
                  <p className='mb-2 text-yellow-400'>{achievement.level}</p>
                  <p className='text-sm text-gray-300'>
                    {achievement.description}
                  </p>
                </div>
              ))}
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
