import firebase from "firebase/app";
import "firebase/firebase-firestore";

// Set your configuration:
var firebaseConfig = {
  apiKey: "..."
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "...",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
