// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <Container className="dashboard-container">
            <h1 className="text-center my-4">Welcome!</h1>
            <Row className="text-center">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Quizzes</Card.Title>
                            <Button variant="primary" onClick={() => navigate('/quizzes')}>Go to Quizzes</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Sentences</Card.Title>
                            <Button variant="primary" onClick={() => navigate('/sentences')}>Go to Sentences</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Add Word</Card.Title>
                            <Button variant="primary" onClick={() => navigate('/add-word')}>Add New Word</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
