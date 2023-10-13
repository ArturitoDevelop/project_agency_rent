import React, { useState, useRef, useEffect } from 'react';
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

  const ymapRef = useRef(null)

  const loadMap = () => { // запуск карты
    if (window.ymaps) {
      window.ymaps.ready(() => {
        ymapRef.current = new window.ymaps.Map('map', {
          center: [55.751574, 37.573856],
          zoom: 10,
        });
        const myMap = ymapRef.current;
      });
    }
  };





  const filterHandler = async (e) => {
    const { value } = e.target;
    if (value === '4') {
      setPosts(allposts);
    } else {
      const res = await axios.post(`/api/post/filter/${value}`);
      setPosts(res.data);
    }
  };

  useEffect(() => {
    loadMap();
  }, []);
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
        <div id="map" className='map' />
      </div>
    </>
  );
}
