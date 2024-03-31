import React from "react";

function Video({ src, title }) {
  return (
    <iframe
      width="919"
      height="525"
      src={src}
      frameBorder="0"
      allowFullScreen
      title={title}
    ></iframe>
  );
}

export default Video;
