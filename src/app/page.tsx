"use client"
import Link from 'next/link'
import { Libre_Baskerville, Kadwa } from 'next/font/google';
import { useEffect, useState, useLayoutEffect } from 'react';
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Copywrite from './Components/Copywrite';
// import background from ''
// If loading a variable font, you don't need to specify the font weight
const font = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
});

const kadwaFont = Kadwa({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kadwa',
});


const mainCopy = "Welcome to the Nexus Manor. A place that exists outside of time —and in between your ears. RYFT is an audio-based adventure game played with speech commands. Featuring a full voice cast, challenging puzzles, and a compelling narrative, this mystery game is powered by the world's greatest graphics engine: your imagination."
const subHeaderCopy = "Navigate freely. Pick-up and combine items to solve puzzles. Chat with an eccentric cast of characters as you attempt to solve the mystery of the manor without ever lifting a finger."

const IMAGES: string[] = ['/assets/images/MANSION-background.webp', '/assets/images/treeline.webp', '/assets/images/MANSION-ground.webp', '/assets/images/lamppost.webp', '/assets/images/MANSION-left-tree.webp', '/assets/images/MANSION-right-tree.webp']

const Center = () => {
  return (
    <div style={{background: 'white'}}>
    <div className='contentWrapper' >
      <div className='tagline md:text-5xl md:pb-15 md:px-[10%]'>
      AN AUDIO & VOICE MYSTERY ADVENTURE
      </div>
      <div className='flex flex-col lg:flex-row rowWrapper md:px-[10%] '>
        <div className='lg:mr-24 lg:text-left copyContainer'>
          <div className='text lg:text-left md:text-[22px] '>
            {mainCopy}
          </div>
          <div className='subheader lg:text-left md:text-3xl'>
          HANDS-FREE TO EXPLORE
          </div>
          <div className='text lg:text-left md:text-[22px]'>
            {subHeaderCopy}
          </div>
        </div>
        <div className='imageWrapper justify-center'>
          <img src={'/assets/images/Game.gif'} width="300px" style={{borderRadius: 30, margin: 'auto'}}/>
        </div>
      </div>
      <div style={{width: '100%', height: '100vh'}} />
      <Copywrite />
    </div>
    </div>
  )
}

const Hero = () => {
  const [vh, setVh] = useState(0);
  const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    setVh(window.innerHeight)
    console.log('innerheight', window.innerHeight)
    const loadImage = (image: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => resolve(image)
        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])



  return (
    <div className='w-screen'>
    <div className='w-screen overflow-x-hidden md:hidden'>
    <img height={"100vh"} src={'/og.webp'} className='mainImage' />
    <div
      className='md:hidden'
        style={{ width: '100%', position: 'absolute', top: '25%' }}
      >
        <div
          style={{
            alignItems: 'center',
            width: '100%',
            position: 'absolute',
          }}
        >
          <div className="pb-6">
            <div className="logo-wrapper h-16 sm:h-36">
              <img
                className="w-60 sm:w-96 logo"
                src={'/assets/images/RYFT_Logo_White.png'}
                alt="Ryft: A Timely Manor"
              />
            </div>
            <div className="">
              <div className="line" />
              <div
                className={`ryft-part part-i sm:text-2xl text-center text-l ${font.className}`}
              >
                Part I
              </div>
            </div>
            <div
              className={`ryft-subtitle text-center sm:text-3xl text-xl  ${font.className}`}
            >
              A TIMELY MANOR
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className='mainParallax hidden md:block'
      style={{
        height: `${vh + 900}px`,
        maxWidth: '100vw',
        position: 'relative',
        // alignItems: 'center',
      }}
    >
      { imgsLoaded ? 
      <ParallaxBanner 
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
      }}
    >
      <div style={{minWidth: 1400, position: 'absolute', bottom: 0, height: "100%",  alignSelf: 'center', left: '50%', transform: 'translateX(-50%)'}}>
      <img
        style={{ minWidth: '100vw', minHeight: "100vh", maxHeight: "100vh", maxWidth: 'none', position: 'relative'}}
        src={IMAGES[0]}
        alt="Ryft: A Timely Manor"
      />
      <img
        style={{ minWidth: '100vw', minHeight: "100vh",  position: 'absolute', bottom: 0}}
        src={IMAGES[0]}
        alt="Ryft: A Timely Manor"
      />
      <ParallaxBannerLayer
        startScroll={0}
        endScroll={900}
        shouldAlwaysCompleteAnimation
        scale={[1, 1.1]}
      >
        <img
          style={{ position: 'absolute', bottom: '-7%' }}
          src={IMAGES[1]}
          alt="Ryft: A Timely Manor"
        />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        startScroll={0}
        endScroll={900}
        shouldAlwaysCompleteAnimation
        scale={[1, 1.4]}
      >
        <img
          style={{ position: 'absolute', bottom: 0, width: '100%' }}
          src={IMAGES[2]}
          alt="Ryft: A Timely Manor"
        />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        startScroll={0}
        endScroll={900}
        shouldAlwaysCompleteAnimation
        scale={[1, 1.6]}
        translateX={['0px', '40px']}
      >
        <img
          style={{ width: '60%', position: 'absolute', bottom: '2%', right: '150px' }}
          src={IMAGES[3]}
          alt="Ryft: A Timely Manor"
        />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        startScroll={0}
        endScroll={900}
        shouldAlwaysCompleteAnimation
        scale={[1, 1.25]}
        translateX={['0px', '-700px']}
        translateY={['0px', '-200px']}
      >
        <img
          style={{ position: 'absolute', bottom: 0, left: '-250px'}}
          src={IMAGES[4]}
          alt="Ryft: A Timely Manor"
        />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        startScroll={0}
        endScroll={900}
        shouldAlwaysCompleteAnimation
        scale={[1, 1.25]}
        translateX={['0px', '700px']}
        translateY={['0px', '-200px']}
      >
        <img
          style={{
            position: 'absolute',
            bottom: 0,
            width: "100%",
            right: '-300px',
          }}
          src={IMAGES[5]}
          alt="Ryft: A Timely Manor"
        />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        style={{ width: '100%', position: 'absolute', top: '25%', opacity: 0 }}
        shouldAlwaysCompleteAnimation
        startScroll={600}
        endScroll={900}
        opacity={[0, 1]}
      >
        <div
          style={{
            alignItems: 'center',
            width: '100%',
            position: 'absolute',
          }}
        >
          <div className="pb-6">
            <div className="logo-wrapper h-36">
              <img
                className="logo w-96"
                src={'/assets/images/RYFT_Logo_White.png'}
                alt="Ryft: A Timely Manor"
              />
            </div>
            <div>
              <div className="line" />
              <div
                className={`ryft-part part-i text-center text-2xl ${font.className}`}
              >
                Part I
              </div>
            </div>
            <div
              className={`ryft-subtitle text-center text-3xl  ${font.className}`}
            >
              A TIMELY MANOR
            </div>
          </div>
        </div>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        opacity={[0, 1]}
        startScroll={600}
        endScroll={900} >
      <div className="flex flex-row flex-wrap p-4 w-1/2" style={{background: '#131017', transform: 'translate(-50%)', left: '50%', position: 'absolute', bottom: 0, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        <div className='text-3xl justify-center' style={{margin: 'auto 20px', flex: 2}}>Join our open beta: </div>
        <Link href="https://testflight.apple.com/join/KcLyBhjj" style={{flex: 1,  margin: '0 auto'}} >
            <img
                className="play-button my-2 md:mr-2 h-10"
                src={'/assets/images/Apple_logo_white.svg'}
                alt="Get it on Google Play"
            />
        </Link>
        <Link href="https://drive.google.com/file/d/1wy-3Tj8WdIeYdQLU0R0eVWSl83GLPoFC/view?usp=sharing" style={{flex: 1, margin: '0 auto'}} className='justify-center'>
          <img
          className="app-button my-2 h-10"
          src={'/assets/images/Android_Robot.svg'}
          alt="Download on the App Store"
          />
        </Link>
        </div>
      </ParallaxBannerLayer> 
      </div>
    </ParallaxBanner>
      
      : null }
      
    </div>
    </div>
  );
};



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ParallaxProvider>
        <Hero />
        <Center />
      </ParallaxProvider>
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
