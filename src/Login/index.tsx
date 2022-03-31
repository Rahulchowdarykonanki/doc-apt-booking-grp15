import React from 'react';
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Button } from 'react-bootstrap';

export const Login = () => {
    const history = useHistory();

    return (
        <React.Fragment>
            <Row className='loginPage mt-3'>
                <Col>
                    <h4>Doctor - Login</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="User Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant='primary' onClick={() => history.push("/doctor")}>Doctor Login</Button>
                    </Form>
                </Col>
                <Col>
                    <h4>Patient - Login</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="User Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant='primary' onClick={() => history.push("/patient")}>Patient Login</Button>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    )
}

