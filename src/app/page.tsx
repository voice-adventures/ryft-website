"use client"
// import Image from 'next/image'
import { Libre_Baskerville } from 'next/font/google';
import { useEffect, useState, useLayoutEffect } from 'react';
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import background from ''
// If loading a variable font, you don't need to specify the font weight
const font = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
});

const IMAGES: string[] = ['/assets/images/MANSION-background.webp', '/assets/images/treeline.webp', '/assets/images/MANSION-ground.webp', '/assets/images/lamppost.webp', '/assets/images/MANSION-left-tree.webp', '/assets/images/MANSION-right-tree.webp']

const Center = () => {
  return (
    <div style={{height: 500, width: "100%"}} />
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
    <div
      style={{
        height: `${vh + 900}px`,
        maxWidth: '100vw',
        position: 'relative',
        alignItems: 'center',
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
      <div style={{minWidth: 1400, position: 'absolute', bottom: 0, height: "100%", width: '100%',  alignSelf: 'center', left: '50%', transform: 'translateX(-50%)'}}>
      {/* <Parallax style={{position: 'relative', height: '100vh', width: '100vw'}} speed={-1000}> */}
      <img
        style={{ width: '100%', position: 'absolute', bottom: 0 }}
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
            <div className="logo-wrapper">
              <img
                className="logo"
                src={'/assets/images/RYFT_Logo_White.png'}
                alt="Ryft: A Timely Manor"
              />
            </div>
            <div className="">
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
      </div>
    </ParallaxBanner>
      
      : null }
      
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
