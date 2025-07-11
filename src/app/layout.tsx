import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';
import Dither from '@/components/Dither';
import { GoogleAnalytics } from '@next/third-parties/google'

const agencyFBBold = localFont({
  src: [
    {
      path: './fonts/agencyfb_bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/agencyfb_reg.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-agency-fb',
  display: 'swap',
  fallback: ['sans-serif'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'COPS IIT BHU',
  description: 'Club of Programmers - IIT BHU',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name="google-site-verification" content="iW_N7TEFOpYFR10FbtzU5bDjA5sEUA_7YjE3PwJ_wdA" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${agencyFBBold.variable} antialiased`}
      >
        <GoogleAnalytics gaId='G-YNJ7TXFBM1' />
        {/* Global Dither Background */}
        <div className='fixed inset-0 z-[-1]'>
          <Dither
            waveSpeed={0.019}
            waveFrequency={3.8}
            waveAmplitude={0.3}
            waveColor={[0.44, 0.53, 0.53]}
            colorNum={6}
            pixelSize={4}
            disableAnimation={false}
            enableMouseInteraction={false}
            mouseRadius={0.5}
          />
        </div>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
