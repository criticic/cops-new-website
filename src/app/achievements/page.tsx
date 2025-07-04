import { achievements } from '../config';
import { GiAchievement } from 'react-icons/gi';

export default function AchievementsPage() {
  const colorMap: Record<number, string> = {
    1: 'text-yellow-500',
    2: 'text-gray-400',
    3: 'text-orange-500',
  };
  const achievementsByYear = Object.groupBy(
    achievements,
    (achievement) => achievement.year
  );

  return (
    <div className='min-h-screen'>
      <div className='relative z-20 pt-32 pb-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-12 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
              Our <span className='text-yellow-500'>Achievements</span>
            </h1>
          </div>

          {/* Awards Section */}
          <div className='mb-16'>
            <h2 className='mb-12 text-center text-2xl font-bold text-white'>
              Awards & Recognition
            </h2>
            <div className='grid grid-cols-1 gap-9'>
              {Object.entries(achievementsByYear)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([year, yearAchievements]) => (
                  <div key={year}>
                    <h2 className='mb-3 text-center text-4xl font-bold text-blue-500'>
                      {year}
                    </h2>
                    <div className='mx-4 grid h-fit [grid-template-columns:repeat(auto-fit,minmax(400px,200px))] justify-center gap-8 lg:grid-cols-3'>
                      {yearAchievements?.map((achievement) => (
                        <div
                          key={achievement.title}
                          className='rounded-lg border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-lg'
                        >
                          <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20'>
                            <GiAchievement
                              className={`h-10 w-10 ${
                                achievement.position &&
                                colorMap[achievement.position]
                                  ? colorMap[achievement.position]
                                  : 'text-white'
                              } transition-all duration-1000 hover:brightness-125`}
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
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className='mb-16'>
            <h2 className='mb-8 text-center text-2xl font-bold text-white'>
              Our Impact
            </h2>
            <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
              <div className='rounded-lg border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15'>
                <div className='mb-2 text-3xl font-bold text-purple-400'>
                  200+
                </div>
                <div className='text-gray-300'>Active Members</div>
              </div>
              <div className='rounded-lg border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15'>
                <div className='mb-2 text-3xl font-bold text-green-400'>
                  50+
                </div>
                <div className='text-gray-300'>Projects Completed</div>
              </div>
              <div className='rounded-lg border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15'>
                <div className='mb-2 text-3xl font-bold text-blue-400'>
                  100+
                </div>
                <div className='text-gray-300'>Events Hosted</div>
              </div>
              <div className='rounded-lg border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15'>
                <div className='mb-2 text-3xl font-bold text-orange-400'>
                  5+
                </div>
                <div className='text-gray-300'>Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div>
            <h2 className='mb-8 text-center text-2xl font-bold text-white'>
              Our Journey
            </h2>
            <div className='space-y-8'>
              {/* Timeline Item 1 */}
              <div className='flex items-center'>
                <div className='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20'>
                  <span className='font-bold text-purple-400'>2024</span>
                </div>
                <div className='ml-6 flex-1 rounded-lg border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15'>
                  <h3 className='text-lg font-semibold text-white'>
                    National Recognition
                  </h3>
                  <p className='text-gray-300'>
                    Won Best Programming Club award and expanded to 200+ members
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className='flex items-center'>
                <div className='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20'>
                  <span className='font-bold text-green-400'>2023</span>
                </div>
                <div className='ml-6 flex-1 rounded-lg border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15'>
                  <h3 className='text-lg font-semibold text-white'>
                    Major Hackathon Victory
                  </h3>
                  <p className='text-gray-300'>
                    Our team won the National Inter-University Hackathon
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className='flex items-center'>
                <div className='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20'>
                  <span className='font-bold text-orange-400'>2022</span>
                </div>
                <div className='ml-6 flex-1 rounded-lg border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15'>
                  <h3 className='text-lg font-semibold text-white'>
                    Community Growth
                  </h3>
                  <p className='text-gray-300'>
                    Reached 100 members and launched our mentorship program
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className='flex items-center'>
                <div className='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20'>
                  <span className='font-bold text-yellow-400'>2020</span>
                </div>
                <div className='ml-6 flex-1 rounded-lg border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15'>
                  <h3 className='text-lg font-semibold text-white'>
                    Club Founded
                  </h3>
                  <p className='text-gray-300'>
                    COPS was established with a vision to build a programming
                    community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
