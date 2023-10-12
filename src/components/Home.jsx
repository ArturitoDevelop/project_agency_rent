import React, { useState } from 'react';
import OneCard from './OneCard';

export default function Home({ posts, handlerOnDelete, user }) {
  return (
    <div className="container" >
      {posts?.map((el) => (
        <OneCard key={el.id}  user={user} handlerOnDelete={handlerOnDelete} post={el} />
      ))}
    </div>
  );
}
