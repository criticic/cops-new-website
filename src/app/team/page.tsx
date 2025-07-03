import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function TeamPage() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='pt-32 pb-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
              Meet Our <span className='text-[#68d9d9]'>Team</span>
            </h1>
          </div>

          {/* Leadership Team */}
          <div className='mb-16'>
            <h2 className='mb-8 text-center text-2xl font-bold text-white'>
              Helm for 2025-26
            </h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {/* Secretary */}
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
                <div className='mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20'>
                  <span className='text-gray-400'>Photo</span>
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Lorem Ipsum
                </h3>
                <p className='mb-2 text-purple-400'>Secretary</p>
                <div className='flex justify-center space-x-4'>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-purple-400'
                  >
                    <FaTwitter className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-purple-400'
                  >
                    <FaLinkedin className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-purple-400'
                  >
                    <FaGithub className='h-5 w-5' />
                  </a>
                </div>
              </div>

              {/* Joint Secretary 1 */}
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
                <div className='mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20'>
                  <span className='text-gray-400'>Photo</span>
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Lorem Ipsum
                </h3>
                <p className='mb-2 text-green-400'>Joint Secretary</p>
                <div className='flex justify-center space-x-4'>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-green-400'
                  >
                    <FaTwitter className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-green-400'
                  >
                    <FaLinkedin className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-green-400'
                  >
                    <FaGithub className='h-5 w-5' />
                  </a>
                </div>
              </div>

              {/* Joint Secretary 2 */}
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
                <div className='mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-pink-500/20'>
                  <span className='text-gray-400'>Photo</span>
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Lorem Ipsum
                </h3>
                <p className='mb-2 text-orange-400'>Joint Secretary</p>
                <div className='flex justify-center space-x-4'>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-orange-400'
                  >
                    <FaTwitter className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-orange-400'
                  >
                    <FaLinkedin className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-orange-400'
                  >
                    <FaGithub className='h-5 w-5' />
                  </a>
                </div>
              </div>

              {/* Technical Head 1 */}
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
                <div className='mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20'>
                  <span className='text-gray-400'>Photo</span>
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Lorem Ipsum
                </h3>
                <p className='mb-2 text-cyan-400'>Technical Head</p>
                <div className='flex justify-center space-x-4'>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-cyan-400'
                  >
                    <FaTwitter className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-cyan-400'
                  >
                    <FaLinkedin className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-cyan-400'
                  >
                    <FaGithub className='h-5 w-5' />
                  </a>
                </div>
              </div>

              {/* Technical Head 2 */}
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
                <div className='mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-teal-500/20 to-green-500/20'>
                  <span className='text-gray-400'>Photo</span>
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Lorem Ipsum
                </h3>
                <p className='mb-2 text-teal-400'>Technical Head</p>
                <div className='flex justify-center space-x-4'>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-teal-400'
                  >
                    <FaTwitter className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-teal-400'
                  >
                    <FaLinkedin className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-teal-400'
                  >
                    <FaGithub className='h-5 w-5' />
                  </a>
                </div>
              </div>

              {/* Category Head */}
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
                <div className='mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-rose-500/20 to-purple-500/20'>
                  <span className='text-gray-400'>Photo</span>
                </div>
                <h3 className='mb-2 text-xl font-semibold text-white'>
                  Lorem Ipsum
                </h3>
                <p className='mb-2 text-rose-400'>Category Head</p>
                <div className='flex justify-center space-x-4'>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-rose-400'
                  >
                    <FaTwitter className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-rose-400'
                  >
                    <FaLinkedin className='h-5 w-5' />
                  </a>
                  <a
                    href='#'
                    className='text-gray-400 transition-colors hover:text-rose-400'
                  >
                    <FaGithub className='h-5 w-5' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
