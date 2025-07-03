export default function ProjectsPage() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='pt-32 pb-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
              Our <span className='text-[#68d9d9]'>Projects</span>
            </h1>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {/* Project Card 1 */}
            <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
              <div className='mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20'>
                <span className='text-gray-400'>Project Image</span>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-white'>
                Web Development Portfolio
              </h3>
              <p className='mb-4 text-gray-300'>
                A modern portfolio website showcasing web development skills and
                projects.
              </p>
              <div className='mb-4 flex flex-wrap gap-2'>
                <span className='rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300'>
                  React
                </span>
                <span className='rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300'>
                  Next.js
                </span>
                <span className='rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300'>
                  TypeScript
                </span>
              </div>
              <div className='flex gap-4'>
                <button className='flex-1 rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700'>
                  View Live
                </button>
                <button className='flex-1 rounded-lg border border-purple-600 px-4 py-2 text-purple-400 transition-colors hover:bg-purple-600 hover:text-white'>
                  Source Code
                </button>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
              <div className='mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20'>
                <span className='text-gray-400'>Project Image</span>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-white'>
                AI Chat Application
              </h3>
              <p className='mb-4 text-gray-300'>
                An intelligent chatbot application using machine learning and
                natural language processing.
              </p>
              <div className='mb-4 flex flex-wrap gap-2'>
                <span className='rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300'>
                  Python
                </span>
                <span className='rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300'>
                  TensorFlow
                </span>
                <span className='rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300'>
                  Flask
                </span>
              </div>
              <div className='flex gap-4'>
                <button className='flex-1 rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700'>
                  View Live
                </button>
                <button className='flex-1 rounded-lg border border-green-600 px-4 py-2 text-green-400 transition-colors hover:bg-green-600 hover:text-white'>
                  Source Code
                </button>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'>
              <div className='mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20'>
                <span className='text-gray-400'>Project Image</span>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-white'>
                Mobile Task Manager
              </h3>
              <p className='mb-4 text-gray-300'>
                A cross-platform mobile application for managing tasks and
                productivity.
              </p>
              <div className='mb-4 flex flex-wrap gap-2'>
                <span className='rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-300'>
                  React Native
                </span>
                <span className='rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-300'>
                  Firebase
                </span>
                <span className='rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-300'>
                  Redux
                </span>
              </div>
              <div className='flex gap-4'>
                <button className='flex-1 rounded-lg bg-orange-600 px-4 py-2 text-white transition-colors hover:bg-orange-700'>
                  View Live
                </button>
                <button className='flex-1 rounded-lg border border-orange-600 px-4 py-2 text-orange-400 transition-colors hover:bg-orange-600 hover:text-white'>
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
