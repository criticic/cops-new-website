import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import { contactInfo, socialLinks } from '@/app/config';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full !bg-black px-4 py-8 text-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col items-center md:items-start'>
            <h3 className='mb-4 text-lg font-semibold text-white'>Follow Us</h3>
            <div className='flex flex-wrap items-center justify-center gap-3 md:justify-start'>
              <a
                href={socialLinks.hashnode}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Hashnode'
                className='flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-400/20 text-blue-400 transition-colors hover:bg-blue-500/30'
              >
                <SiHashnode className='h-4 w-4' />
              </a>
              <a
                href={socialLinks.insta}
                className='flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 transition-colors hover:bg-purple-500/30'
                aria-label='Instagram'
              >
                <FaInstagram className='h-4 w-4' />
              </a>
              <a
                href={socialLinks.github}
                className='flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gray-700/20 to-gray-800/20 text-gray-400 transition-colors hover:bg-gray-700/30'
                aria-label='GitHub'
              >
                <FaGithub className='h-4 w-4' />
              </a>
              <a
                href={socialLinks.twitter}
                className='flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400 transition-colors hover:bg-blue-500/30'
                aria-label='Twitter'
              >
                <FaTwitter className='h-4 w-4' />
              </a>
              <a
                href={socialLinks.linkedin}
                className='flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-700/20 text-blue-500 transition-colors hover:bg-blue-600/30'
                aria-label='LinkedIn'
              >
                <FaLinkedin className='h-4 w-4' />
              </a>
              <a
                href={socialLinks.youtube}
                className='flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 text-red-400 transition-colors hover:bg-red-500/30'
                aria-label='YouTube'
              >
                <FaYoutube className='h-4 w-4' />
              </a>
            </div>
          </div>

          <div className='grid gap-6 md:col-span-1 lg:col-span-2'>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2'>
              <div className='flex items-center rounded-lg border border-gray-700/50 bg-gray-900/50 p-4 backdrop-blur-sm'>
                <div className='mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20'>
                  <HiMail className='h-6 w-6 text-purple-400' />
                </div>
                <div className='min-w-0 flex-1'>
                  <h3 className='text-lg font-semibold text-white'>Email</h3>
                  <p className='text-sm break-all text-gray-400 md:text-base'>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className='hover:underline'
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-center rounded-lg border border-gray-700/50 bg-gray-900/50 p-4 backdrop-blur-sm'>
                <div className='mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20'>
                  <HiLocationMarker className='h-6 w-6 text-green-400' />
                </div>
                <div className='min-w-0 flex-1'>
                  <h3 className='text-lg font-semibold text-white'>Location</h3>
                  <p className='text-sm text-gray-400 md:text-base'>
                    {contactInfo.add}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-700/50 pt-6 text-center'>
          <span className='text-sm text-gray-400 md:text-base'>
            © COPS {year}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
