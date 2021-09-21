import React from "react";
import "./VideoPlayer.scss";

//Components
import Navbar from "../../Components/Navbar/Navbar";
import SingleVideo from "../../Components/SingleVideo/SingleVideo";
import SideVideos from "../../Components/SideVideos/SideVideos";

function VideoPlayer() {
  return (
    <>
      <nav className="video-player__navbar">
        <Navbar />
      </nav>

      <main className="video-player__main">
        <div className="video-player-main__center-wrapper">
          <SingleVideo />
          <SideVideos />
        </div>
      </main>
    </>
  );
}

export default VideoPlayer;
