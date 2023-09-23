"use client"
// import Image from 'next/image'
import { Libre_Baskerville } from 'next/font/google';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
// import background from ''
// If loading a variable font, you don't need to specify the font weight
const font = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
});

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    console.log('scroll position', position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        height: '2700px',
        maxWidth: '100vw',
        position: 'relative',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: scrollPosition > 900 ? 'relative' : 'fixed',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: '100vh',
          width: '100vw',
          minWidth: 1300,
          marginTop: scrollPosition > 900 ? '900px' : 0,
          alignItems: 'center',
        }}
      >
        {/* <Parallax style={{position: 'relative', height: '100vh', width: '100vw'}} speed={-1000}> */}
        <img
          style={{ width: '100%', position: 'absolute', bottom: 0 }}
          src={'/assets/images/MANSION-background.png'}
          alt="Ryft: A Timely Manor"
        />
        <Parallax
          startScroll={0}
          endScroll={900}
          shouldAlwaysCompleteAnimation
          style={{ position: 'absolute', bottom: '-5%' }}
          scale={[1, 1.1]}
        >
          <img
            src={'/assets/images/treeline.png'}
            alt="Ryft: A Timely Manor"
          />
        </Parallax>
        <Parallax
          startScroll={0}
          endScroll={900}
          shouldAlwaysCompleteAnimation
          style={{ position: 'absolute', bottom: 0 }}
          scale={[1, 1.4]}
        >
          <img
            src={'/assets/images/MANSION-ground.png'}
            alt="Ryft: A Timely Manor"
          />
        </Parallax>
        <Parallax
          startScroll={0}
          endScroll={900}
          shouldAlwaysCompleteAnimation
          style={{ width: '60%', position: 'absolute', bottom: '1%', right: 0 }}
          scale={[1, 1.5]}
          translateX={['-150px', '-75px']}
        >
          <img
            src={'/assets/images/lamppost.png'}
            alt="Ryft: A Timely Manor"
          />
        </Parallax>
        <Parallax
          startScroll={0}
          endScroll={900}
          shouldAlwaysCompleteAnimation
          style={{ width: '130%', position: 'absolute', bottom: 0, left: -300}}
          scale={[1, 1.6]}
          translateX={['0px', '-800px']}
          translateY={['0px', '-200px']}
        >
          <img
            src={'/assets/images/MANSION-left-tree.png'}
            alt="Ryft: A Timely Manor"
          />
        </Parallax>
        <Parallax
          startScroll={0}
          endScroll={900}
          shouldAlwaysCompleteAnimation
          style={{
            width: '150%',
            position: 'absolute',
            bottom: 0,
            right: -300,
          }}
          scale={[1, 1.6]}
          translateX={['0px', '800px']}
          translateY={['0px', '-200px']}
        >
          <img
            src={'/assets/images/MANSION-right-tree.png'}
            alt="Ryft: A Timely Manor"
          />
        </Parallax>
        <Parallax
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
              top: '50%',
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
        </Parallax>
        {/* </Parallax> */}
      </div>
    </div>
  );
};



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ParallaxProvider>
        <Hero />
      </ParallaxProvider>

    </main>
  )
}
