import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyAjwWoxr1PuSZFkW5Rc1pMHREVZOTXoJq8",
    authDomain: "nwitter-c8899.firebaseapp.com",
    projectId: "nwitter-c8899",
    storageBucket: "nwitter-c8899.appspot.com",
    messagingSenderId: "235140368886",
    appId: "1:235140368886:web:1f5ba8c59dfd30f0a99fd7"
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;

  export const authService = firebase.auth()