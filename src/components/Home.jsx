import React, { useState } from 'react';
import OneCard from './OneCard';

export default function Home({ posts, handlerOnDelete, user }) {
  return (
    <div className="container" style={{ marginTop: '5%' }}>
      {posts?.map((el) => (
        <OneCard user={user} handlerOnDelete={handlerOnDelete} post={el} />
      ))}
    </div>
  );
}
