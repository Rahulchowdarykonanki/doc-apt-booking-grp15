import React from 'react';
import { useHistory } from "react-router-dom";

import { Row, Col, Table, Button, Breadcrumb } from 'react-bootstrap';

export const Doctor = () => {
    const history = useHistory();

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Doctor</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Welcome, <i>Doctor 2</i></h1>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Specialization</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Doctor 2</td>
                                <td>55</td>
                                <td>Male</td>
                                <td>
                                    <i>
                                        Pediatrisian <br />
                                        Dermetologist <br />
                                        Arthopedic
                                    </i>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <h1>View Appointments</h1>
                    <br />
                    <div>
                        <Button variant='primary' onClick={() => history.push("/appointmentView")}>View Appointments</Button> <br /><br />
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export const ViewAppointments = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/patient">
                            Doctor
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>View Appointment</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Patient Name</th>
                                <th>Cancel Appointment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>04/05/2022</td>
                                <td>10:30 AM</td>
                                <td>
                                    <div>John Smith</div>
                                    <small><i>Pediatrisian</i></small>
                                </td>
                                <td>
                                    <Button variant='primary' onClick={() => history.push("/docAppointmentCancel")}>Cancel Appointment</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>05/20/2022</td>
                                <td>10:00 AM</td>
                                <td>
                                    <div>John Smith</div>
                                    <small><i>Dermetologist</i></small>
                                </td>
                                <td>
                                    <Button variant='primary' onClick={() => history.push("/docAppointmentCancel")}>Cancel Appointment</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>05/20/2022</td>
                                <td>11:00 AM</td>
                                <td>
                                    <div>Edsel John</div>
                                    <small><i>Dermetologist</i></small>
                                </td>
                                <td>
                                    <Button variant='primary' onClick={() => history.push("/docAppointmentCancel")}>Cancel Appointment</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export const DocAppointmentCancel = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/doctor">
                            Doctor
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Book Appointment Canceled</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <h1>Appointment Successfully Canceled</h1>
        </div>
    )
}