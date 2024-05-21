// src/components/AddWord.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddWord = () => {
    const [englishWord, setEnglishWord] = useState('');
    const [turkishWord, setTurkishWord] = useState('');
    const [sentences, setSentences] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [pronunciation, setPronunciation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'words'), {
                englishWord,
                turkishWord,
                sentences: sentences.split('\n'), // Her satırı ayrı bir cümle olarak kaydet
                imageUrl,
                pronunciation
            });
            setEnglishWord('');
            setTurkishWord('');
            setSentences('');
            setImageUrl('');
            setPronunciation('');
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return (
        <div>
            <h2>Add Word</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="English Word"
                    value={englishWord}
                    onChange={(e) => setEnglishWord(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Turkish Word"
                    value={turkishWord}
                    onChange={(e) => setTurkishWord(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Sentences (one per line)"
                    value={sentences}
                    onChange={(e) => setSentences(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Pronunciation (optional)"
                    value={pronunciation}
                    onChange={(e) => setPronunciation(e.target.value)}
                />
                <button type="submit">Add Word</button>
            </form>
        </div>
    );
};

export default AddWord;
