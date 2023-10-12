import React from 'react';
import OneCard from './OneCard';

export default function Favorites({ favoritePosts, user, handlerOnDelete }) {
  return (
    <div className="container">
      {favoritePosts?.map((el) => (
        <OneCard user={user} handlerOnDelete={handlerOnDelete} post={el} />
      ))}
    </div>
  );
}
