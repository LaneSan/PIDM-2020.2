import * as firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyD92WndOFE_51xFOcd5utozQQSTQXEEEJ4",
    authDomain: "mobile-atv07-firebasecrud.firebaseapp.com",
    projectId: "mobile-atv07-firebasecrud",
    storageBucket: "mobile-atv07-firebasecrud.appspot.com",
    messagingSenderId: "155382035309",
    appId: "1:155382035309:web:4b9642bea72388411d6064"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.firestore();