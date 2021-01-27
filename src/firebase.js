import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA1xkNe1tRLu0Bs4qlNawPBhWDLiSczLb8",
    authDomain: "whats-app-clone-8854b.firebaseapp.com",
    projectId: "whats-app-clone-8854b",
    storageBucket: "whats-app-clone-8854b.appspot.com",
    messagingSenderId: "998450189754",
    appId: "1:998450189754:web:299102bc0a60a1eb2a3983",
    measurementId: "G-YR36E9G6TR"
  };

const firebaseApp = firebase.initializeApp
(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db

