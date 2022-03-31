import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const Header = () => {
    return (
        <header>
            <Row>
                <Col>
                    <h2>Doc. Apt. Mgt. Portal</h2>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                    <a href='/feedback'>Feedback</a> &nbsp; {' '} &nbsp;
                    <a href='/'>Logout</a>
                </Col>
            </Row>
        </header>
    )
}
