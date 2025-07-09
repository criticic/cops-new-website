'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaExternalLinkAlt } from 'react-icons/fa';
import StarBorder from '@/components/StarBorder';

export default function Navbar() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fullText = 'Club Of ProgrammerS';
  const finalText = 'COPS';
  const pathName = usePathname();

  useEffect(() => {
    let currentIndex = 0;
    let typingTimer: NodeJS.Timeout;
    let pauseTimer: NodeJS.Timeout;
    let erasingTimer: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        typingTimer = setTimeout(typeText, 100);
      } else {
        // Pause for 2 seconds before erasing
        pauseTimer = setTimeout(() => {
          eraseText();
        }, 2000);
      }
    };

    const eraseText = () => {
      if (currentIndex > 0) {
        setDisplayText(fullText.substring(0, currentIndex - 1));
        currentIndex--;
        erasingTimer = setTimeout(eraseText, 50);
      } else {
        // Type the final text
        typeFinalText();
      }
    };

    const typeFinalText = () => {
      let finalIndex = 0;
      const typeFinal = () => {
        if (finalIndex < finalText.length) {
          setDisplayText(finalText.substring(0, finalIndex + 1));
          finalIndex++;
          setTimeout(typeFinal, 100);
        } else {
          setIsTyping(false);
        }
      };
      typeFinal();
    };

    typeText();

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(pauseTimer);
      clearTimeout(erasingTimer);
    };
  }, []);

  return (
    <nav className='fixed top-6 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 transform px-4'>
      <div className='rounded-2xl border border-white/20 bg-white/10 px-4 py-4 shadow-2xl backdrop-blur-xl sm:rounded-2xl sm:px-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link href='/' className='block'>
                <h1 className='font-agency-fb min-w-[120px] text-2xl font-bold text-white sm:min-w-[200px] sm:text-3xl'>
                  {displayText}
                  {isTyping && (
                    <span className='animate-pulse text-purple-300'>|</span>
                  )}
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <div className='flex items-center space-x-6'>
              {/* <Link
                href='/projects'
                className={`${pathName === '/projects' ? 'bg-white/10' : ''} rounded-xl px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white`}
              >
                Projects
              </Link> */}
              <Link
                href='/resources'
                className={`${pathName === '/resources' ? 'bg-white/10' : ''} rounded-xl px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white`}
              >
                Resources
              </Link>
              <Link
                href='/team'
                className={`${pathName === '/team' ? 'bg-white/10' : ''} rounded-xl px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white`}
              >
                Team
              </Link>
              <Link
                href='/achievements'
                className={`${pathName === '/achievements' ? 'bg-white/10' : ''} rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white`}
              >
                Achievements
              </Link>
              <StarBorder as='button' color='cyan' speed='3s' thickness={1.5}>
                <Link
                  href='https://week.copsiitbhu.co.in/'
                  className='flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white'
                >
                  COPS Week <FaExternalLinkAlt className='text-xs' />
                </Link>
              </StarBorder>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              className='rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='mt-4 border-t border-white/20 pt-4 md:hidden'>
            <div className='flex flex-col space-y-2'>
              {/* <Link
                href='/projects'
                className='rounded-xl px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link> */}
              <Link
                href='/resources'
                className='rounded-xl px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href='/team'
                className='rounded-xl px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href='/achievements'
                className='rounded-xl px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Achievements
              </Link>
              <StarBorder as='button' color='cyan' speed='3s' thickness={1.5}>
                <Link
                  href='https://week.copsiitbhu.co.in/'
                  className='flex items-center justify-between rounded-xl px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white'
                >
                  COPS Week <FaExternalLinkAlt className='text-xs' />
                </Link>
              </StarBorder>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
