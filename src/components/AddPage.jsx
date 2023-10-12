import axios from 'axios'
import React, { useState } from 'react'
import {
    Col, Form, Row,
} from 'react-bootstrap';

export default function AddPage() {
    const [input, setInput] = useState({
        title: '',
        description: '',
        price: '',
        photo: '',

    })


    const submitHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post('/api/post/add', input)
        if (response.ok) {
            window.location = '/';
        }

        setInput({
            title: '',
            description: '',
            price: '',
        });
        
    }


    return (
        <Form onSubmit={submitHandler}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Недвижимость</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Тип объекта" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Описание</Form.Label>
                    <Form.Control name="description" type="text" placeholder="Описание объекта" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Цена</Form.Label>
                <Form.Control name="price" placeholder="Цена" />
            </Form.Group>


            <div className='downloadphoto'>
                    <input type="file"
                        defaultValue={input.photo}
                        name='photo'
                        accept="image" />

            </div>

            <button style={{ display: 'none' }}
            //  onClick={handleImageClick} 
             type='submit'>ok</button>

        </Form>
    )
}
