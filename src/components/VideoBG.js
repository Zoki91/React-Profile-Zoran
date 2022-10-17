import React from "react";
import videoBg from "../Assets/video-bg.mp4";
import "../components/VideoBG.css";

const Video = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <video src={videoBg} autoPlay loop muted />
        <div className="overlay"></div>
        <div className="content">
          <h1>WELCOME</h1>
          <p>To my site.</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
