import React from "react";

function Post({ title, body }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      <hr />
    </>
  );
}

export default Post;
