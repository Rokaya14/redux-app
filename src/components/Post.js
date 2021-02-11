import React from 'react';
const Post = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{Post.body.substring(0, 100)} </p>
    </article>
  );
}

export default Post;