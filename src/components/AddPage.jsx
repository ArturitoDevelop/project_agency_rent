import axios from 'axios';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export default function AddPage({ input, allCategory, changeHandler }) {
  const submitHandler = async (e) => {
    e.preventDefault();

    // const formData1  = new FormData();

    // for (const key in input) {
    //   formData1.append(key, input[key]);
    // }
    // formData1.append('file', e.target.photo.files[0]);

    const response = await axios.post('/api/post/add', input);
    if (response.status === 200) {
      window.location = '/';
    }

    e.target.reset();
  };

  return (
    <Form type="submit" onSubmit={submitHandler}>
      <Row className="mb-3">
        <Form.Select
          className="input_style"
          name="cat_id"
          value={input.cat_id}
          onChange={changeHandler}
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
            value={input.title}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Описание</Form.Label>
          <Form.Control
            name="description"
            value={input.description}
            onChange={changeHandler}
            type="text"
            placeholder="Описание объекта"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Цена</Form.Label>
        <Form.Control
          name="price"
          placeholder="Цена"
          value={input.price}
          onChange={changeHandler}
        />
      </Form.Group>

      <div className="downloadphoto">
        <input type="file" value={input.photo} name="photo" accept="image" />
      </div>

      <button
        style={{ display: 'none' }}
        //  onClick={handleImageClick}
        type="submit"
      >
        ok
      </button>
    </Form>
  );
}
