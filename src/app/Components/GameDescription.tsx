import Copyright from "./Copyright"
import Trailer from "./Trailer"

const mainCopy = "Welcome to the Nexus Manor. A place that exists outside of time —and in between your ears. RYFT is an audio-based adventure game played with speech commands. Featuring a full voice cast, challenging puzzles, and a compelling narrative, this mystery game is powered by the world's greatest graphics engine: your imagination."
const subHeaderCopy = "Navigate freely. Pick-up and combine items to solve puzzles. Chat with an eccentric cast of characters as you attempt to solve the mystery of the manor without ever lifting a finger."

const GameDescription = () => {
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
                <div style={{width: '100%', height: '20vh'}} />
                <Trailer />
                <Copyright />
            </div>
        </div>
    )
  }
  
  export default GameDescription
  