// addWordsToFirestore.js
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDzqL8F3aFcWAewPUBRVG0MijwBSAjpayI",
    authDomain: "my-auth-app-98fc2.firebaseapp.com",
    projectId: "my-auth-app-98fc2",
    storageBucket: "my-auth-app-98fc2.appspot.com",
    messagingSenderId: "849848450553",
    appId: "1:849848450553:web:438674dd04521846c15128",
    measurementId: "G-DLM519D9FE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const words = [
    {
        englishWord: 'apple',
        turkishWord: 'elma',
        sentences: ['I ate an apple.', 'The apple is red.'],
        imageUrl: 'https://example.com/apple.jpg',
        pronunciation: 'ˈæpəl'
    },
    {
        englishWord: 'banana',
        turkishWord: 'muz',
        sentences: ['The banana is yellow.', 'She bought a bunch of bananas.'],
        imageUrl: 'https://example.com/banana.jpg',
        pronunciation: 'bəˈnænə'
    }
    // Daha fazla kelime ekleyin...
];

const addWords = async () => {
    for (const word of words) {
        try {
            await addDoc(collection(db, 'words'), word);
            console.log(`Added word: ${word.englishWord}`);
        } catch (e) {
            console.error('Error adding word: ', e);
        }
    }
};

addWords();

