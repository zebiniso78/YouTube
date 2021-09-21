import React from "react";
import "./Channel.scss";

//Components
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ChannelOwner from "../../Components/ChannelOwner/ChannelOwner";
import ChannelOwnerVideos from "../../Components/ChannelOwnerVideos/ChannelOwnerVideos";

function Channel() {
  return (
    <>
      <nav className="channel__navbar">
        <Navbar />
      </nav>

      <main className="channel__main">
        <Sidebar />
        <div className="main__center-wrapper">
          <ChannelOwner />
          <ChannelOwnerVideos />
        </div>
      </main>
    </>
  );
}

export default Channel;
