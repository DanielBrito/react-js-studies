import firebase from "firebase/app";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDSk_I7uQRG73f3F1ugC2e52cVzdj3QZss",
  authDomain: "clock-it-9a34e.firebaseapp.com",
  databaseURL: "https://clock-it-9a34e.firebaseio.com",
  projectId: "clock-it-9a34e",
  storageBucket: "clock-it-9a34e.appspot.com",
  messagingSenderId: "11506270470",
  appId: "1:11506270470:web:04d94ad08335a62b8b9e87",
  measurementId: "G-T1L5RYP9LJ",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
