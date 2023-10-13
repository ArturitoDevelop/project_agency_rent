import React, { useState } from 'react';
import OneCard from './OneCard';

export default function Home({ posts, handlerOnDelete, user, favoriteHandler }) {
  return (
    <div className="container" >
      {posts?.map((el) => (
        <OneCard key={el.id} favoriteHandler={favoriteHandler} user={user} handlerOnDelete={handlerOnDelete} post={el} />

      ))}
    </div>
  );
}
