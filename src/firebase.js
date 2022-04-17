import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyALu5ajSuhQLYyxruEldiHORGZtbgpz2HI",
    authDomain: "tinder-clone-firebase-ab537.firebaseapp.com",
    projectId: "tinder-clone-firebase-ab537",
    storageBucket: "tinder-clone-firebase-ab537.appspot.com",
    messagingSenderId: "874290685219",
    appId: "1:874290685219:web:d7aaf824acafb722281896"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;