import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/bsky.app'
import 'react-social-icons/x'
import 'react-social-icons/instagram'
import 'react-social-icons/tiktok'


const Socials = () => {
    return (
        <div className='pt-4 md:pt-6 flex justify-center absolute bottom-6 w-full'>
            <SocialIcon url="https://www.tiktok.com/@ryftgame" bgColor="transparent" />
            <SocialIcon url="https://www.instagram.com/ryftgame/" bgColor="transparent" />
            <SocialIcon url="https://bsky.app/profile/ryft.bsky.social" bgColor="transparent" />
            <SocialIcon url="https://x.com/RyftGame" bgColor="transparent" />
        </div>
    )
}

export default Socials