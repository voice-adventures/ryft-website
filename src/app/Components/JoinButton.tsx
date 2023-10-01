import Link from "next/link";
import { Inter } from 'next/font/google';


const interFont = Inter({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-inter',
  });
  
  
const JoinButton = ({url, imageSrc, altText}:{url: string, imageSrc: string, altText: string}) => (
    <Link href={url} className="buttonStyles">
        <div className={`text-white text-base button-text ${interFont.className}`}>JOIN THE BETA</div>
        <div className="relative flex-col justify-start items-start flex ml-2">
            <img
                className='w-6'
                src={imageSrc}
                alt={altText}
            />
        </div>
    </Link>
  )

  export default JoinButton;
  