import axios from 'axios';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export default function EditPage({ myPostId, changeHandler, allCategory }) {
  const updateHandler = async (e) => {
    e.preventDefault();
    const response = await axios.patch(
      `/api/post/update/${myPostId.id}`,
      Object.fromEntries(new FormData(e.target)),
    );
    if (response.status === 200) {
      window.location = '/';
    }
  };

  return (
    <Form type="submit" onSubmit={updateHandler}>
      <Row className="mb-3">
        <Form.Select
          className="input_style"
          name="cat_id"
          value={myPostId.cat_id}
          placeholder="Тип объекта"
          aria-label="Default select example"
        >
          <option>Недвижимость</option>
          {allCategory.map((el) => (
            <option value={el.id} key={el.id}>
              {el.title}
            </option>
          ))}
        </Form.Select>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Заголовок</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Описание объекта"
            defaultValue={myPostId.title}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Описание</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Описание объекта"
            defaultValue={myPostId.description}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Цена</Form.Label>
        <Form.Control
          onChange={changeHandler}
          name="price"
          placeholder="Цена"
          defaultValue={myPostId.price}
        />
      </Form.Group>

      <div className="downloadphoto">
        <input type="file" defaultValue={myPostId.photo} name="photo" accept="image" />
      </div>

      <button
        style={{ display: 'none' }}
        // onClick={handleImageClick}
        type="submit"
      >
        ok
      </button>
    </Form>
  );
}
