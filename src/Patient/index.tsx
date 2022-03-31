import React from 'react';
import { useHistory } from "react-router-dom";
import { Row, Col, Table, Button, Breadcrumb } from 'react-bootstrap';

export const Patient = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Patient</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Patient Information</h1>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Smith</td>
                                <td>30</td>
                                <td>Male</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <h1>Appointment Booking</h1>
                    <br />
                    <div>
                        <Button variant='primary' onClick={() => history.push("/appointment")}>Book Appointment</Button> <br /><br />
                        <Button variant='primary' onClick={() => history.push("/patAppointmentView")}>View Appointment</Button> <br /><br />
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export const ViewPatientAppointments = () => {
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
                                <th>Doctor</th>
                                <th>Cancel Appointment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>04/05/2022</td>
                                <td>10:30 AM</td>
                                <td>
                                    <div>Doctor 2</div>
                                    <small><i>Pediatrisian</i></small>
                                </td>
                                <td>
                                    <Button variant='primary' onClick={() => history.push("/appointmentCancel")}>Cancel Appointment</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>05/15/2022</td>
                                <td>03:30 PM</td>
                                <td>
                                    <div>Doctor 1</div>
                                    <small><i>Radiologist</i></small>
                                </td>
                                <td>
                                    <Button variant='primary' onClick={() => history.push("/appointmentCancel")}>Cancel Appointment</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>05/20/2022</td>
                                <td>10:00 AM</td>
                                <td>
                                    <div>Doctor 2</div>
                                    <small><i>Dermetologist</i></small>
                                </td>
                                <td>
                                    <Button variant='primary' onClick={() => history.push("/appointmentCancel")}>Cancel Appointment</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export const AppointmentSuccess = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/patient">
                            Patient
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Book Appointment Success</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <h1>Appointment Successfully Booked</h1>
        </div>
    )
}

export const AppointmentCancel = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/patient">
                            Patient
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Book Appointment Canceled</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <h1>Appointment Successfully Canceled</h1>
        </div>
    )
}

