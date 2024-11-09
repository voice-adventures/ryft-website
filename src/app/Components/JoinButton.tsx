import Link from "next/link";
import { Inter } from 'next/font/google';


const interFont = Inter({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-inter',
  });
  
  
const JoinButton = ({url, imageSrc, altText, className}:{url: string, imageSrc: string, altText: string, className: string}) => (
    <Link href={url} >
        <img
            className='sm:h-16 sm:w-auto w-60 h-auto'
            src={imageSrc}
            alt={altText}
            // style={style}
        />
    </Link>
  )

  export default JoinButton;
  