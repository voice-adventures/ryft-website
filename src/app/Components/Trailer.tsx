import { useState } from "react"
import { IoIosPlayCircle } from "react-icons/io";

const Trailer = () => {
    let [showVideo, setShowVideo] = useState(false)
    return (
        <div className='trailer' >
            {showVideo ? 
                <div className="videoImageStubWrapper sm:videoImageStubWrapperLarge">
                    <img className="videoImageStub sm:videoImageStubLarge " src={'/og.webp'} />
                    <iframe src='https://www.youtube.com/embed/xgAXQGemVGc?autoplay=1'
                    className="video sm:videoLarge"
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'/>
 
                </div>
                :
                <div className="videoImageStubWrapper sm:videoImageStubWrapperLarge">
                    <img className="videoImageStub sm:videoImageStubLarge " src={'/og.webp'} onClick={() => setShowVideo(true)} />
                    <IoIosPlayCircle className="playIcon sm:playIconLarge" onClick={() => setShowVideo(true)}/>
                </div>
        }

        </div>
    )
  }
  
  export default Trailer

