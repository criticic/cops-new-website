import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import { helm } from '../config';

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
          {helm.map((year, index) => (
            <div className='mb-16' key={index}>
              <h2 className='mb-8 text-center text-2xl font-bold text-white'>
                {year.term === '2025-2026' ? 'Current Helm' : `${year.term} Helm`}
              </h2>
              <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {year.team?.map((person, personIndex) => {
                  const isCurrentTerm = year.term === '2025-2026';
                  return (
                    <div
                      className={`rounded-lg border p-6 backdrop-blur-sm transition-all duration-300 flex flex-col items-center text-center ${
                        isCurrentTerm
                          ? 'border-[#68d9d9]/30 bg-gray-900/70 hover:bg-gray-900/90 hover:border-[#68d9d9]/50 hover:shadow-lg hover:shadow-[#68d9d9]/20'
                          : 'border-gray-700/50 bg-gray-900/50 hover:bg-gray-900/70'
                      }`}
                      key={personIndex}
                    >
                      {/* Profile Photo */}
                      {person.photo && (
                        <div className="mb-4">
                          <Image
                            src={person.photo}
                            alt={person.name}
                            width={200}
                            height={200}
                            className={`h-48 w-48 rounded-xl object-cover ring-2 ${
                              isCurrentTerm ? 'ring-[#68d9d9]/30' : 'ring-purple-500/20'
                            }`}
                          />
                        </div>
                      )}

                      {/* Name and Position */}
                      <div className="mb-4">
                        <h3 className='text-lg font-semibold text-white leading-tight mb-1'>
                          {person.name}
                        </h3>
                        <p className={`text-sm ${isCurrentTerm ? 'text-[#68d9d9] font-medium' : 'text-[#68d9d9]'}`}>
                          {person.por}
                        </p>
                        {person.email && (
                          <a className="text-xs text-gray-400 mt-1" href={`mailto:${person.email}`}>
                            {person.email}
                          </a>
                        )}
                      </div>

                      {/* Social Icons */}
                      <div className="flex space-x-2 justify-center">
                        {person.socials.website && (
                          <a
                            href={person.socials.website}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-400 transition-all duration-300 hover:bg-green-500/30 hover:scale-110'
                            aria-label='Website'
                          >
                            <FaGlobe className='h-3.5 w-3.5' />
                          </a>
                        )}
                        {person.socials.linkedin && (
                          <a
                            href={person.socials.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-700/20 text-blue-500 transition-all duration-300 hover:bg-blue-600/30 hover:scale-110'
                            aria-label='LinkedIn'
                          >
                            <FaLinkedin className='h-3.5 w-3.5' />
                          </a>
                        )}
                        {person.socials.github && (
                          <a
                            href={person.socials.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gray-700/20 to-gray-800/20 text-gray-400 transition-all duration-300 hover:bg-gray-700/30 hover:scale-110'
                            aria-label='GitHub'
                          >
                            <FaGithub className='h-3.5 w-3.5' />
                          </a>
                        )}
                        {person.socials.instagram && (
                          <a
                            href={person.socials.instagram}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 transition-all duration-300 hover:bg-purple-500/30 hover:scale-110'
                            aria-label='Instagram'
                          >
                            <FaInstagram className='h-3.5 w-3.5' />
                          </a>
                        )}
                        {person.socials.twitter && (
                          <a
                            href={person.socials.twitter}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400 transition-all duration-300 hover:bg-blue-500/30 hover:scale-110'
                            aria-label='Twitter'
                          >
                            <FaTwitter className='h-3.5 w-3.5' />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
