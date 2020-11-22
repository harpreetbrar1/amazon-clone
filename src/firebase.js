import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC3P7u8qItqPJW3epb2TP8TMDNZGzWMPfs",
    authDomain: "clone-51c37.firebaseapp.com",
    databaseURL: "https://clone-51c37.firebaseio.com",
    projectId: "clone-51c37",
    storageBucket: "clone-51c37.appspot.com",
    messagingSenderId: "253143009759",
    appId: "1:253143009759:web:98fd4ba32ef0a03cf21c6a",
    measurementId: "G-BYF1C1ZX5D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

// const db = firebase.firestore();
const auth = firebase.auth();

export { auth };