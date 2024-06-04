import { Libre_Baskerville, Kadwa } from 'next/font/google';
import { useEffect, useState } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import JoinButton from './JoinButton';

// import background from ''
// If loading a variable font, you don't need to specify the font weight
const font = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-libre',
});

const kadwaFont = Kadwa({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kadwa',
});

const IMAGES: string[] = ['/assets/images/MANSION-background.webp', '/assets/images/treeline.webp', '/assets/images/MANSION-ground.webp', '/assets/images/lamppost.webp', '/assets/images/MANSION-left-tree.webp', '/assets/images/MANSION-right-tree.webp']

const MobileHero = () => (
    <div className='w-screen overflow-x-hidden md:hidden min-h-[500px]'>
        <img height={"100vh"} src={'/og.webp'} className='mainImage' />
        <div
            className='md:hidden'
            style={{ width: '100%', position: 'absolute', top: '25%' }}>
            <div
                style={{
                    alignItems: 'center',
                    width: '100%',
                    position: 'absolute',
                    minWidth: "270px",
                }}>
                <div className="pb-6">
                    <div className="logo-wrapper h-16 sm:h-36">
                        <img
                            className="w-60 sm:w-96 logo"
                            src={'/assets/images/RYFT_Logo_White.png'}
                            alt="Ryft: A Timely Manor"
                        />
                    </div>
                    <div>
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
                <div className='mx-auto flex-col sm:flex-row flex gap-4 justify-center items-center mt-10'>
                    <JoinButton
                        url="https://docs.google.com/forms/d/e/1FAIpQLSezBsjuQH06Ew-qaALLPJMI66W2X5md5E9tdu_bLpbq0FGSoA/viewform?usp=sf_link"
                        imageSrc='/assets/images/Apple_logo_white.svg'
                        altText="Join the beta"
                    />
                    <JoinButton
                        url="https://docs.google.com/forms/d/e/1FAIpQLSezBsjuQH06Ew-qaALLPJMI66W2X5md5E9tdu_bLpbq0FGSoA/viewform?usp=sf_link"
                        imageSrc='/assets/images/Android_logo.png'
                        altText="Join the beta"
                    />
                </div>
            </div>
        </div>
    </div>
)

const Hero = () => {
  const [vh, setVh] = useState(0);
  const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    setVh(window.innerHeight)
    const loadImage = (image: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
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
        <MobileHero />
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
        <div className={'heroWrapper'}>
        {/* <img
            style={{ minWidth: '100vw', maxWidth: 'none', minHeight: "100vh", position: 'relative'}}
            src={IMAGES[0]}
            alt="Ryft: A Timely Manor"
        /> */}
        <img
            style={{ width: '100%', position: 'absolute', bottom: 0}}
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
                style={{ position: 'absolute', bottom: '0', minWidth: '100vw', width: "100%" }}
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
                style={{ position: 'absolute', bottom: 0, width: '100%', minWidth: '100vw' }}
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
            style={{ width: '100%', position: 'absolute', bottom: 0, minWidth: '100vw'}}
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
            style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', minWidth: '100vw'}}
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
                minWidth: '100vw',
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
            <div className='mx-auto w-1/2 flex-row flex gap-4 justify-center mt-10'>
                <JoinButton
                    url="https://testflight.apple.com/join/KcLyBhjj"
                    imageSrc='/assets/images/Apple_logo_white.svg'
                    altText="Join the beta"
                />
                <JoinButton
                    url="https://drive.google.com/file/d/1wy-3Tj8WdIeYdQLU0R0eVWSl83GLPoFC/view?usp=drive_link"
                    imageSrc='/assets/images/Android_logo.png'
                    altText="Join the beta"
                />
            </div>
            </div>
            </ParallaxBannerLayer>
            </div>
        </ParallaxBanner>
        
        : null }
        
        </div>
    </div>
  );
};

export default Hero;


