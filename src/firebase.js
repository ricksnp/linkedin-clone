import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDMEgjTEk0JdqaRUYYQZSv7IB4Fo-cnrPg",
    authDomain: "linkedin-clone-2.firebaseapp.com",
    projectId: "linkedin-clone-2",
    storageBucket: "linkedin-clone-2.appspot.com",
    messagingSenderId: "108956760203",
    appId: "1:108956760203:web:4b71a5ae695e2cd95bfc8e",
    measurementId: "G-X5RGGSTEF9"
};

// Connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };