import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZlyebS9-UccQxNqeUNcS-vtrQKnXpm2Q",
    authDomain: "netflix-clone-b3c81.firebaseapp.com",
    projectId: "netflix-clone-b3c81",
    storageBucket: "netflix-clone-b3c81.appspot.com",
    messagingSenderId: "252203348634",
    appId: "1:252203348634:web:3c6c8ce200ef22cfbfa523"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;