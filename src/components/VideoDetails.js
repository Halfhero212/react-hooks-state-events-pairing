import React, { useState } from "react";

function VideoDetails({ views, createdAt, upvotes, downvotes, toggleComments, hideComments }) {
  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [downvoteCount, setDownvoteCount] = useState(downvotes);

  return (
    <div>
      <h1>Video Title</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <button onClick={() => setUpvoteCount(upvoteCount + 1)}>👍 {upvoteCount}</button>
      <button onClick={() => setDownvoteCount(downvoteCount + 1)}>👎 {downvoteCount}</button>
      <button onClick={toggleComments}>{hideComments ? "Show Comments" : "Hide Comments"}</button>
    </div>
  );
}

export default VideoDetails;
