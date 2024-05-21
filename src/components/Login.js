// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage('Login successful!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            setMessage('Login failed. Please try again.');
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center">Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Login
                </Button>
            </Form>
            {message && <Alert variant="danger" className="mt-3">{message}</Alert>}
            <p className="mt-3">
                Don't have an account? <Link to="/register">Register</Link>
            </p>
            <p>
                Forgot your password? <Link to="/forgot-password">Reset Password</Link>
            </p>
        </Container>
    );
};

export default Login;
