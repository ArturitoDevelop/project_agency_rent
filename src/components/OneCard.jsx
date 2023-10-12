import React, { useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function OneCard({ post, handlerOnDelete, user, favoriteHandler }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Card className="cardone" style={{ width: '18rem' }}>
      <Link to={`/post/house/${post.id}`} reloadDocument className="cardone-link">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {post.Pictures.map((picture) => (
            <Carousel.Item key={picture.id}>
              <Card.Img
                style={{ height: '200px', objectFit: 'cover' }}
                variant="top"
                src={picture.img}
              />
              <Carousel.Caption />
            </Carousel.Item>
          ))}
        </Carousel>
      </Link>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
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
        </div>
      </Card.Body>
    </Card>
  );
}
