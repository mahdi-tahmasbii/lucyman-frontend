"use client";
import React from "react";
import ReactPlayer from "react-player/lazy";

const Video = () => {
  return (
    <div className="lg:w-[1300px] MyVideoPage md:mt-0 -mt-24">
      <ReactPlayer
        className=" fixed-bottom h-screen"
        url="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
        width="100%"
        height="40rem"
        muted
        loop
        playing
      />
    </div>
  );
};

export default Video;
