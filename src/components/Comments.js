import React from "react";

function Comments({ comments }) {
  return (
    <div>
      <h2>{comments.length} Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
