import React from "react";

function BGVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed object-cover w-full h-full pointer-events-none z-0 mix-blend-difference "
    >
      <source src="../../../assets/bgloopOr.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default BGVideo;
