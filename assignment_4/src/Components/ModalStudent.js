import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import React, { useState } from 'react';

function ModalStudent({ onAddStudent }) {
    const [info, setInfo] = useState({});
    const [show, setShow] = useState(false);

    const handleAddStudent = () => {
        onAddStudent(info);
        setShow(false);
        setInfo({});
    };

    const handleChange = (e) => {
        setInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant='primary' onClick={handleShow}>
                Add new student
            </Button>

            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Student's Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='formBasicId'>
                            <Form.Label>Student ID</Form.Label>
                            <Form.Control
                                type='number'
                                name='id'
                                value={info.id}
                                onChange={handleChange}
                                placeholder='Enter student ID'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicName'>
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control
                                type='text'
                                name='name'
                                value={info.name}
                                onChange={handleChange}
                                placeholder='Enter student name'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicAge'>
                            <Form.Label>Student Age</Form.Label>
                            <Form.Control
                                type='number'
                                name='age'
                                value={info.age}
                                onChange={handleChange}
                                placeholder='Enter student age'
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Math</Form.Label>
                                <Form.Control
                                    placeholder='Math score'
                                    type='number'
                                    name='math'
                                    value={info.math}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Form.Label>English</Form.Label>
                                <Form.Control
                                    placeholder='English score'
                                    type='number'
                                    name='english'
                                    value={info.english}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Form.Label>History</Form.Label>
                                <Form.Control
                                    placeholder='History score'
                                    type='number'
                                    name='history'
                                    value={info.history}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant='primary' onClick={handleAddStudent}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalStudent;
