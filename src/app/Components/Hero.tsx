import { Libre_Baskerville, Kadwa } from 'next/font/google';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import JoinButton from './JoinButton';
import Socials from './Socials';

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

const IMAGES: string[] = [
    '/assets/images/MANSION-background.webp',
    '/assets/images/treeline.webp',
    '/assets/images/MANSION-ground.webp',
    '/assets/images/lamppost.webp',
    '/assets/images/MANSION-left-tree.webp',
    '/assets/images/MANSION-right-tree.webp'
]

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
                <div className='mx-auto flex-col sm:flex-row flex gap-7 justify-center items-center mt-10'>
                    <JoinButton
                        url="https://apps.apple.com/app/ryft-a-timely-manor/id1661569093"
                        imageSrc='/assets/images/Download_on_the_App_Store_Badge.svg'
                        altText="Download on the App Store"
                    />
                    <JoinButton
                        url="https://play.google.com/store/apps/details?id=com.ryftgame.ryft"
                        imageSrc='/assets/images/google-play-badge.png'
                        altText="Download on the Google Play Store"
                    />
                </div>
            </div>
        </div>
        <Socials />
    </div>
)

const Hero = () => {
    const [imgsLoaded, setImgsLoaded] = useState(false)
    const { scrollY } = useScroll();

    useEffect(() => {
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

    // Parallax Transforms
    const scale1 = useTransform(scrollY, [0, 900], [1, 1.1]);

    const scale2 = useTransform(scrollY, [0, 900], [1, 1.4]);

    const scale3 = useTransform(scrollY, [0, 900], [1, 1.6]);
    const x3 = useTransform(scrollY, [0, 900], ['0px', '40px']);

    const scale4 = useTransform(scrollY, [0, 900], [1, 1.25]);
    const x4 = useTransform(scrollY, [0, 900], ['0px', '-700px']);
    const y4 = useTransform(scrollY, [0, 900], ['0px', '-200px']);

    const scale5 = useTransform(scrollY, [0, 900], [1, 1.25]);
    const x5 = useTransform(scrollY, [0, 900], ['0px', '700px']);
    const y5 = useTransform(scrollY, [0, 900], ['0px', '-200px']);

    const opacityContent = useTransform(scrollY, [500, 800], [0, 1]);

    return (
        <div className='w-screen'>
            <MobileHero />

            {/* Desktop Parallax Container */}
            <div
                className='mainParallax hidden md:block'
                style={{
                    height: `calc(100vh + 900px)`,
                    width: '100vw',
                    position: 'relative',
                }}
            >
                {imgsLoaded ?
                    <div
                        style={{
                            position: 'sticky',
                            top: 0,
                            height: '100vh',
                            width: '100vw',
                            overflow: 'hidden',
                        }}
                    >
                        <div className={'heroWrapper relative w-full h-full'}>
                            {/* Layer 0: Background - Static at bottom? Actually mostly static or slight */}
                            <img
                                style={{ width: '100%', position: 'absolute', bottom: 0, minWidth: '100vw' }}
                                src={IMAGES[0]}
                                alt="Ryft: A Timely Manor"
                            />

                            {/* Layer 1: Treeline */}
                            <motion.img
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    minWidth: '100vw',
                                    width: "100%",
                                    scale: scale1
                                }}
                                src={IMAGES[1]}
                                alt="Ryft: A Timely Manor"
                            />

                            {/* Layer 2: Ground */}
                            <motion.img
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%',
                                    minWidth: '100vw',
                                    scale: scale2
                                }}
                                src={IMAGES[2]}
                                alt="Ryft: A Timely Manor"
                            />

                            {/* Layer 3: Lamppost */}
                            <motion.img
                                style={{
                                    width: '100%',
                                    position: 'absolute',
                                    bottom: 0,
                                    minWidth: '100vw',
                                    scale: scale3,
                                    x: x3
                                }}
                                src={IMAGES[3]}
                                alt="Ryft: A Timely Manor"
                            />

                            {/* Layer 4: Left Tree */}
                            <motion.img
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    minWidth: '100vw',
                                    scale: scale4,
                                    x: x4,
                                    y: y4
                                }}
                                src={IMAGES[4]}
                                alt="Ryft: A Timely Manor"
                            />

                            {/* Layer 5: Right Tree */}
                            <motion.img
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    width: "100%",
                                    minWidth: '100vw',
                                    scale: scale5,
                                    x: x5,
                                    y: y5
                                }}
                                src={IMAGES[5]}
                                alt="Ryft: A Timely Manor"
                            />

                            {/* Content Layer */}
                            <motion.div
                                style={{
                                    width: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    height: '100%',
                                    opacity: opacityContent
                                }}
                            >
                                <div
                                    style={{
                                        alignItems: 'center',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginTop: '25vh',
                                    }}
                                >
                                    <div className="pb-6 text-center">
                                        <div className="logo-wrapper h-36 mx-auto mb-4">
                                            <img
                                                className="logo w-96 inline-block"
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
                                    <div className='mx-auto w-1/2 flex-row flex gap-7 justify-center mt-10'>
                                        <JoinButton
                                            url="https://apps.apple.com/app/ryft-a-timely-manor/id1661569093"
                                            imageSrc='/assets/images/Download_on_the_App_Store_Badge.svg'
                                            altText="Download on the App Store"
                                        />
                                        <JoinButton
                                            url="https://play.google.com/store/apps/details?id=com.ryftgame.ryft"
                                            imageSrc='/assets/images/google-play-badge.png'
                                            altText="Download on the Google Play Store"
                                        />
                                    </div>
                                </div>
                                <Socials />
                            </motion.div>
                        </div>
                    </div>

                    : <div className='w-full h-full bg-black' />}

            </div>
        </div>
    );
};

export default Hero;
