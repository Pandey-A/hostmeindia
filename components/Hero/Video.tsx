import React from "react";

const Video = () => {
  return (
    <video
      loop
      autoPlay
      muted
      src="/video/safariVideo.mp4"
      className="object-cover w-full h-[60vh] lg:h-[80vh] transform backdrop-hue-rotate-0"
    />
  );
};

export default Video;
