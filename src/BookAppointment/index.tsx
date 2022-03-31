import React from 'react';
import { useHistory } from "react-router-dom";
import { Row, Col, Table, Form, Button, Breadcrumb } from 'react-bootstrap';

export const BookAppointment = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/patient">
                            Patient
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Book Appointment</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Appointment Booking</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Patient Id</Form.Label>
                            <Form.Control type="text" placeholder="Patient Id" value="john@gmail.com" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control type="text" placeholder="Patient Name" value="John Smith" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Mobile #</Form.Label>
                            <Form.Control type="text" placeholder="Mobile #" value="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="specials">
                            <Form.Label>Speciality</Form.Label>
                            <Form.Control as="select" placeholder="Search">
                                <option value="">--Select--</option>
                                <option value="">Neuro Surgion</option>
                                <option value="">Dermetologist</option>
                                <option value="">Pediatrisian</option>
                                <option value="">Radiologist</option>
                                <option value="">Arthopedic</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="doctors">
                            <Form.Label>Doctors</Form.Label>
                            <Form.Control as="select" placeholder="Search">
                                <option value="">--Select--</option>
                                <option value="">Doctor 1</option>
                                <option value="">Doctor 2</option>
                            </Form.Control>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="date">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="doctors">
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control as="select" placeholder="Search">
                                        <option value="">--Select--</option>
                                        <option value="">07:00 AM</option>
                                        <option value="">08:30 AM</option>
                                        <option value="">10:00 AM</option>
                                        <option value="">11:00 AM</option>
                                        <option value="">03:00 PM</option>
                                        <option value="">04:30 PM</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant='primary' onClick={() => history.push("/appointmentSuccess")}>Book Appointment</Button>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    )
}

