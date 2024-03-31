import React, { useState } from "react";
import Video from "./Video";
import VideoDetails from "./VideoDetails";
import Comments from "./Comments";
import videoData from "../data/video";

function App() {
  const [hideComments, setHideComments] = useState(false);

  function toggleComments() {
    setHideComments(!hideComments);
  }

  return (
    <div className="App">
      <Video src={videoData.embedUrl} title={videoData.title} />
      <VideoDetails
        views={videoData.views}
        createdAt={videoData.createdAt}
        upvotes={videoData.upvotes}
        downvotes={videoData.downvotes}
        toggleComments={toggleComments}
        hideComments={hideComments}
      />
      {!hideComments && <Comments comments={videoData.comments} />}
    </div>
  );
}

export default App;
