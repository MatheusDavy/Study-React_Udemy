import React from 'react';
import './style.css'

export const PostCard = (posts)=> {

  return (
    <div key={posts.key} className="container__Card">
      <img src={posts.cover} alt='img'/>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
      <hr />
      <strong>{posts.email}</strong>
    </div>
  );
}
