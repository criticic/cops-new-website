export default function AchievementsPage() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='pt-32 pb-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
              Our <span className='text-[#68d9d9]'>Achievements</span>
            </h1>
          </div>

          {/* Awards Section */}
          <div className='mb-16'>
            <h2 className='mb-8 text-center text-2xl font-bold text-white'>
              Awards & Recognition
            </h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {/* Achievement 1 */}
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
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
                  Best Programming Club 2024
                </h3>
                <p className='mb-2 text-yellow-400'>University Award</p>
                <p className='text-sm text-gray-300'>
                  Recognized for outstanding contribution to programming
                  education
                </p>
              </div>

              {/* Achievement 2 */}
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20'>
                  <svg
                    className='h-8 w-8 text-purple-500'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                  </svg>
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Hackathon Champions
                </h3>
                <p className='mb-2 text-purple-400'>National Competition</p>
                <p className='text-sm text-gray-300'>
                  First place in National Inter-University Hackathon
                </p>
              </div>

              {/* Achievement 3 */}
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20'>
                  <svg
                    className='h-8 w-8 text-green-500'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                  </svg>
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Open Source Contribution
                </h3>
                <p className='mb-2 text-green-400'>GitHub Recognition</p>
                <p className='text-sm text-gray-300'>
                  Over 1000 contributions to open source projects
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className='mb-16'>
            <h2 className='mb-8 text-center text-2xl font-bold text-white'>
              Our Impact
            </h2>
            <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm'>
                <div className='mb-2 text-3xl font-bold text-purple-400'>
                  200+
                </div>
                <div className='text-gray-300'>Active Members</div>
              </div>
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm'>
                <div className='mb-2 text-3xl font-bold text-green-400'>
                  50+
                </div>
                <div className='text-gray-300'>Projects Completed</div>
              </div>
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm'>
                <div className='mb-2 text-3xl font-bold text-blue-400'>
                  100+
                </div>
                <div className='text-gray-300'>Events Hosted</div>
              </div>
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm'>
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
                <div className='ml-6 flex-1 rounded-lg border border-gray-700/50 bg-gray-900/50 p-4 backdrop-blur-sm'>
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
                <div className='ml-6 flex-1 rounded-lg border border-gray-700/50 bg-gray-900/50 p-4 backdrop-blur-sm'>
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
                <div className='ml-6 flex-1 rounded-lg border border-gray-700/50 bg-gray-900/50 p-4 backdrop-blur-sm'>
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
                <div className='ml-6 flex-1 rounded-lg border border-gray-700/50 bg-gray-900/50 p-4 backdrop-blur-sm'>
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
