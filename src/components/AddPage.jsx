import axios from 'axios';
import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

export default function AddPage({ input, allCategory, changeHandler, user }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileInput = e.target.files;
    formData.append('price', e.target.price.value);
    formData.append('cat_id', e.target.cat_id.value);
    formData.append('title', e.target.title.value);
    formData.append('description', e.target.description.value);
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('files', fileInput.files[i]);
    }
    e.target.reset();
    const response = await axios.post('/api/post/add', formData);
    if (response.status === 200) {
      window.location = '/';
    }

    e.target.reset();
  };

  return (
    <div className='conteinerform'>
      {user?.isAdmin === true && (
        <Form className="disForm" encType="multipart/form-data" onSubmit={submitHandler}>
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

              <Form.Control
                name="title"
                type="text"
                placeholder="Название объекта"
                value={input.title}
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">

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

            <Form.Control
              name="price"
              placeholder="Цена"
              value={input.price}
              onChange={changeHandler}
            />
          </Form.Group>

          <div className="downloadphoto">
            <label htmlFor="file-upload" className="custom-file-upload">
              Выбрать файл
            </label>
            <input type="file" id="file-upload" name="files" accept="image" multiple />
          </div>


          <Button className="btnSub" variant="primary" type="submit">
            Добавить
          </Button>
        </Form>
      )}
    </div>
  );
}
