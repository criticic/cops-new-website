import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { helm } from '../config/config';

export default function TeamPage() {
  const h2025 = helm;

  return (
    <div className='min-h-screen bg-black'>
      <div className='pt-32 pb-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
              Meet Our <span className='text-[#68d9d9]'>Team</span>
            </h1>
          </div>
          {h2025.map((year, index) => (
            <div className='mb-16' key={index}>
              <h2 className='mb-8 text-center text-2xl font-bold text-white'>
                Helm for {year.term}
              </h2>
              <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {year.team?.map((person, index) => (
                  <div
                    className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70'
                    key={index}
                  >
                    <div className='mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20'>
                      <span className='text-gray-400'>Photo</span>
                    </div>
                    <h3 className='mb-2 text-xl font-semibold text-white'>
                      {person.Name}
                    </h3>
                    <p className='mb-2 text-[#68d9d9]'>{person.por}</p>
                    <div className='flex justify-center space-x-4'>
                      <a
                        href={person.socials.twitter}
                        className='text-gray-400 transition-colors hover:text-[#68d9d9]'
                      >
                        <FaTwitter className='h-5 w-5' />
                      </a>
                      <a
                        href={person.socials.linkedin}
                        className='text-gray-400 transition-colors hover:text-[#68d9d9]'
                      >
                        <FaLinkedin className='h-5 w-5' />
                      </a>
                      <a
                        href={person.socials.github}
                        className='text-gray-400 transition-colors hover:text-[#68d9d9]'
                      >
                        <FaGithub className='h-5 w-5' />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
