"use client"
// import Image from 'next/image'
import { Libre_Baskerville } from 'next/font/google';
import { useEffect, useState, useLayoutEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
// import background from ''
// If loading a variable font, you don't need to specify the font weight
const font = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
});

const Center = () => {
  return (
    <div style={{height: 500, width: "100%"}} />
  )
}

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [vh, setVh] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    setVh(window.innerHeight)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div
      style={{
        height: `${vh + 900}px`,
        maxWidth: '100vw',
        position: 'relative',
        alignItems: 'center',
      }}
    >
      <ParallaxBanner 
        style={{
          position: scrollPosition > 900 ? 'absolute' : 'fixed',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: '100vh',
          width: '100vw',
          minWidth: '1300px',
          alignItems: 'center',
        }}
      >
        {/* <Parallax style={{position: 'relative', height: '100vh', width: '100vw'}} speed={-1000}> */}
        <img
          style={{ width: '100%', position: 'absolute', bottom: 0 }}
          src={'/assets/images/MANSION-background.png'}
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
            src={'/assets/images/treeline.png'}
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
            src={'/assets/images/MANSION-ground.png'}
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
            src={'/assets/images/lamppost.png'}
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
            src={'/assets/images/MANSION-left-tree.png'}
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
            src={'/assets/images/MANSION-right-tree.png'}
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
                  Part XVII
                </div>
              </div>
              <div
                className={`ryft-subtitle text-center text-3xl  ${font.className}`}
              >
                AN ENDLESS MANOR
              </div>
            </div>
          </div>
        </ParallaxBannerLayer>
        {/* </Parallax> */}
      </ParallaxBanner>
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
