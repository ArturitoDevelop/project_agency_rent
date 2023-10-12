import React from 'react'
import OneCard from './OneCard'

export default function Favorites({posts,user, handlerOnDelete}) {
  return (
    <div className="container" >
      {posts?.map((el) => (
        <OneCard user={user} handlerOnDelete={handlerOnDelete} post={el} />
      ))}
    </div>
  )
}
