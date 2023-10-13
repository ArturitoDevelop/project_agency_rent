import React from 'react';
import OneCard from './OneCard';

export default function Favorites({ favoritePosts, user, handlerOnDelete, deleteFavHandler }) {
  
  return (
    <div className="container" >
      {favoritePosts?.map((el) => (
        <OneCard deleteFavHandler={deleteFavHandler} user={user} handlerOnDelete={handlerOnDelete} post={el} />
      ))}
    </div>
  );
}
