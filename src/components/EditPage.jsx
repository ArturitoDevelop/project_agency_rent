import axios from 'axios';
import React, { useState } from 'react';
import {
     Col, Form, Row,
} from 'react-bootstrap';

export default function EditPage({ myPostId }) {
    const [input, setInput] = useState({
        title: myPostId.title,
        description: myPostId.description,
        price: myPostId.price,

    });

    const updateHandler = async (event) => {
        event.preventDefault();
        const response = await axios.patch(`/api/post/update/${myPostId.id}`, { title: input.title, description: input.description, price: input.price })
        if (response.ok) {
            window.location = '/'
        }
    }

    const changeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <Form onSubmit={updateHandler}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Недвижимость</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Тип объекта"
                        onChange={changeHandler} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control
                        name="description"
                        type="text"
                        placeholder="Описание объекта"
                        onChange={changeHandler} />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Цена</Form.Label>
                <Form.Control
                    name="price"
                    placeholder="Цена"
                    onChange={changeHandler} />
            </Form.Group>


            <div className='downloadphoto'>
                {isFormVisible ? (
                    <input type="file"
                        defaultValue={formData.photo}
                        name='photo'
                        accept="image" />
                ) : (<img src="/img/photoblue.png"
                    alt="downloadphoto" />)
                }
            </div>

            <button style={{ display: 'none' }} onClick={handleImageClick} type='submit'>ok</button>

        </Form>
    )
}
