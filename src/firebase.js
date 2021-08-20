// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDl5Eair7ii-NF5z5m3r-KXOCITY26CDa0",
    authDomain: "zomato-clone-dbd74.firebaseapp.com",
    projectId: "zomato-clone-dbd74",
    storageBucket: "zomato-clone-dbd74.appspot.com",
    messagingSenderId: "834657349480",
    appId: "1:834657349480:web:3c24268eac8c670df7f0dd",
    measurementId: "G-4GE58MRXE8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};