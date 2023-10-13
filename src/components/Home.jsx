import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import OneCard from './OneCard';

export default function Home({
  posts,
  handlerOnDelete,
  user,
  favoriteHandler,
  setPosts,
  allposts,
  currentUser,
}) {
  const filterHandler = async (e) => {
    const { value } = e.target;
    if (value === '4') {
      setPosts(allposts);
    } else {
      const res = await axios.post(`/api/post/filter/${value}`);
      setPosts(res.data);
    }
  };

  return (
    <>
      <ButtonGroup className="btngroup" variant="text" aria-label="text button group">
        <Button onClick={filterHandler} value="4">
          Все
        </Button>
        <Button onClick={filterHandler} value="1">
          Дома
        </Button>
        <Button onClick={filterHandler} value="2">
          Квартиры
        </Button>
        <Button onClick={filterHandler} value="3">
          Комнаты
        </Button>
      </ButtonGroup>

      <div className="container">
        {posts?.map((el) => (
          <OneCard
          currentUser={currentUser}
            key={el.id}
            favoriteHandler={favoriteHandler}
            user={user}
            handlerOnDelete={handlerOnDelete}
            post={el}
          />
        ))}
      </div>
    </>
  );
}
