import React, { useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteBtn from './UI/DeleteBtn';

export default function OneCard({ post, handlerOnDelete, user, favoriteHandler, deleteFavHandler }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Card className="cardone" style={{ width: '18rem' }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {post.Pictures.map((picture) => (
          <Carousel.Item key={picture.id}>
            <Card.Img
              style={{ height: '200px', objectFit: 'cover' }}
              variant="top"
              src={`/img/${picture.img}`}
            />
            <Carousel.Caption />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Link to={`/post/house/${post.id}`} reloadDocument className="cardone-link">
          <Card.Title>{post.title}</Card.Title>
        </Link>
        <Card.Text>{post.description}</Card.Text>
        <Card.Text>{post.price}</Card.Text>

        <div className="d-flex justify-content-between">
          {user?.isAdmin === true && (
            <>
              <button type="submit" className="btn" onClick={() => handlerOnDelete(post.id)}>
                <img className="iconfav" src="/img/trash.png" alt="" />
              </button>
              <button className="btn" type="submit">
                <a target="_blank" className="bt" href={`/post/${post.id}`} rel="noreferrer">
                  <img className="iconfav" src="/img/edit.png" alt="" />
                </a>
              </button>
            </>
          )}

          <button className="btn" type="button" onClick={() => favoriteHandler(post.id)}>
            <img className="iconfav" src="/img/free-icon-home-1098486.png" alt="" />
          </button>
          <DeleteBtn deleteFavHandler={deleteFavHandler} postId={post.id}  />
        </div>
      </Card.Body>
    </Card>
  );
}
