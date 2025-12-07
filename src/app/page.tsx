"use client"

import GameDescription from './Components/GameDescription';
import Hero from './Components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <GameDescription />
    </main>
  )
}

//Will use when we have links to appstores

// <div className="lg:h-18 flex h-16 w-1/2 justify-center sm:w-full md:h-16 md:w-1/2 md:justify-start">
//   <img
//     className="play-button my-2 md:mr-2"
//     src={'/assets/images/google-play-badge.png'}
//     alt="Get it on Google Play"
//   />
// </div>
// <Link href="https://testflight.apple.com/join/KcLyBhjj" className="lg:h-18 flex h-16  w-1/2 content-center justify-center sm:w-full md:h-16 md:w-1/2 md:justify-end">
//   <img
//     className="app-button my-2"
//     src={'/assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'}
//     alt="Download on the App Store"
//   />
// </Link> */}
