import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';

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
  };

  return (
    user?.isAdmin === true && (
      <div className="container" style={{ justifyContent: 'center' }}>
        <div className="text">Новое объявление</div>
        <form encType="multipart/form-data" onSubmit={submitHandler}>
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
          <div className="form-row">
            <div className="input-data">
              <input
                name="title"
                type="text"
                placeholder="Название объекта"
                value={input.title}
                onChange={changeHandler}
                required
              />
              <div className="underline" />
        
            </div>
            <div className="input-data">
              <input
                name="description"
                value={input.description}
                onChange={changeHandler}
                type="text"
                placeholder="Описание объекта"
                required
              />
              <div className="underline" />
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                name="price"
                placeholder="Цена"
                value={input.price}
                onChange={changeHandler}
                required
              />
              <div className="underline" />
           
            </div>
          </div>
          <div className="form-row">
            <div className="downloadphoto">
              <label htmlFor="file-upload" className="custom-file-upload">
                Выбрать файл
              </label>
              <input type="file" id="file-upload" name="files" accept="image/*" multiple />
            </div>
          </div>
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner" />
              <input type="submit" value="submit" />
            </div>
          </div>
        </form>
      </div>
    )
  );
}
