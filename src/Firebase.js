import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDahgM0TOhYUEr8YfOkfaSDaLjV3fZE1Nc",
    authDomain: "qfashion-d2af5.firebaseapp.com",
    databaseURL: "https://qfashion-d2af5.firebaseio.com",
    projectId: "qfashion-d2af5",
    storageBucket: "qfashion-d2af5.appspot.com",
    messagingSenderId: "1023196649385",
    appId: "1:1023196649385:web:712274f6a98e0d3c6c56b8",
    measurementId: "G-K6BBYYV45R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;