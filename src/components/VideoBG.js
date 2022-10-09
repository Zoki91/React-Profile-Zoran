import React from 'react'
import videoBg from '../Assets/video-BG1.mp4'
import '../components/VideoBG.css'

const Video = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>WELCOME</h1>
            <p>To my site.</p>
        </div>
    </div>
  )
}

export default Video