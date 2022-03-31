import React from 'react';
import { useHistory } from "react-router-dom";

import { Row, Col, Breadcrumb, Form, Button } from 'react-bootstrap';

export const Feedback = () => {
    const history = useHistory();

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Feedback</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Feedback</h1>
                    <Form>
                    <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Patient Id</Form.Label>
                            <Form.Control type="text" placeholder="Patient Id" value="john@gmail.com" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control type="text" placeholder="Patient Name" value="John Smith" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control as="select" placeholder="Rating">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Feedback</Form.Label>
                            <Form.Control as="textarea" placeholder="Feedback" value="" />
                        </Form.Group>

                        <Button variant='primary' onClick={() => history.push("/feedbackSuccess")}>Submit Feedback</Button>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export const FeedbackSuccess = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/feedback">
                            Feedback
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Feedback Success</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <h1>Feedback Successfully Submitted</h1>
        </div>
    )
}