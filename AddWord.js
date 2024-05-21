// src/components/AddWord.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const AddWord = () => {
    const [englishWord, setEnglishWord] = useState('');
    const [turkishWord, setTurkishWord] = useState('');
    const [sentences, setSentences] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [pronunciation, setPronunciation] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'words'), {
                englishWord,
                turkishWord,
                sentences: sentences.split('\n'),
                imageUrl,
                pronunciation
            });
            setEnglishWord('');
            setTurkishWord('');
            setSentences('');
            setImageUrl('');
            setPronunciation('');
            setMessage('Word added successfully!');
        } catch (e) {
            console.error('Error adding document: ', e);
            setMessage('Error adding word. Please try again.');
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center">Add Word</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEnglishWord">
                    <Form.Label>English Word</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="English Word"
                        value={englishWord}
                        onChange={(e) => setEnglishWord(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formTurkishWord">
                    <Form.Label>Turkish Word</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Turkish Word"
                        value={turkishWord}
                        onChange={(e) => setTurkishWord(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formSentences">
                    <Form.Label>Sentences (one per line)</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Sentences"
                        value={sentences}
                        onChange={(e) => setSentences(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formImageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formPronunciation">
                    <Form.Label>Pronunciation (optional)</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Pronunciation"
                        value={pronunciation}
                        onChange={(e) => setPronunciation(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Add Word
                </Button>
            </Form>
            {message && <Alert variant="success" className="mt-3">{message}</Alert>}
        </Container>
    );
};

export default AddWord;
