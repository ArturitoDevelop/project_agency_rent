import React, { useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';

export default function OneCard({ post, handlerOnDelete, user }) {
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
              src={picture.img}
            />
            <Carousel.Caption />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.description}</Card.Text>
        <Card.Text>{post.price}</Card.Text>

        <div className="d-flex justify-content-between">
          {user?.isAdmin === true && (
            <>
              <Button onClick={() => handlerOnDelete(post.id)} variant="danger">
                Delete
              </Button>
              <Button variant="warning">
                <a target="_blank" className="bt" href={`/post/${post.id}`} rel="noreferrer">
                  Edit
                </a>
              </Button>
            </>
          )}
          <button className='btn' type="submit">
            <img className="iconfav" src="/img/free-icon-home-1098486.png" alt="" />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}
