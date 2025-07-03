import { HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='pt-32 pb-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
              Get in <span className='text-purple-400'>Touch</span>
            </h1>
            <p className='mx-auto max-w-2xl text-lg text-gray-400'>
              Ready to join our programming community? We&apos;d love to hear
              from you!
            </p>
          </div>

          <div className='grid gap-12 lg:grid-cols-2'>
            {/* Contact Form */}
            <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-8 backdrop-blur-sm'>
              <h2 className='mb-6 text-2xl font-bold text-white'>
                Send us a message
              </h2>
              <form className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='mb-2 block text-sm font-medium text-gray-300'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='w-full rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-purple-500'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-medium text-gray-300'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-purple-500'
                    placeholder='your@email.com'
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='mb-2 block text-sm font-medium text-gray-300'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    className='w-full rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-purple-500'
                    placeholder='How can we help?'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='mb-2 block text-sm font-medium text-gray-300'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={6}
                    className='w-full rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-purple-500'
                    placeholder='Tell us more about your interest in joining COPS...'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700'
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className='space-y-8'>
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 backdrop-blur-sm'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20'>
                    <HiMail className='h-6 w-6 text-purple-400' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-white'>Email</h3>
                    <p className='text-gray-400'>contact@cops.club</p>
                  </div>
                </div>
              </div>

              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 backdrop-blur-sm'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20'>
                    <HiLocationMarker className='h-6 w-6 text-green-400' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-white'>
                      Location
                    </h3>
                    <p className='text-gray-400'>
                      Computer Science Building
                      <br />
                      Room 301
                    </p>
                  </div>
                </div>
              </div>

              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 backdrop-blur-sm'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20'>
                    <HiClock className='h-6 w-6 text-orange-400' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-white'>
                      Meeting Hours
                    </h3>
                    <p className='text-gray-400'>
                      Wednesdays: 6:00 PM - 8:00 PM
                      <br />
                      Saturdays: 2:00 PM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className='rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 backdrop-blur-sm'>
                <h3 className='mb-4 text-lg font-semibold text-white'>
                  Follow Us
                </h3>
                <div className='flex space-x-4'>
                  <a
                    href='#'
                    className='flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 transition-colors hover:bg-purple-500/30'
                  >
                    <FaInstagram className='h-6 w-6' />
                  </a>
                  <a
                    href='#'
                    className='flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-700/20 to-gray-800/20 text-gray-400 transition-colors hover:bg-gray-700/30'
                  >
                    <FaGithub className='h-6 w-6' />
                  </a>
                  <a
                    href='#'
                    className='flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400 transition-colors hover:bg-blue-500/30'
                  >
                    <FaTwitter className='h-6 w-6' />
                  </a>
                  <a
                    href='#'
                    className='flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-700/20 text-blue-500 transition-colors hover:bg-blue-600/30'
                  >
                    <FaLinkedin className='h-6 w-6' />
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
