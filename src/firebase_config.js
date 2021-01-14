import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCfz6NLKsljtYNM3vKxLKZ6JyT6ElpoxvI",
    authDomain: "quizapp-7c3f4.firebaseapp.com",
    projectId: "quizapp-7c3f4",
    storageBucket: "quizapp-7c3f4.appspot.com",
    messagingSenderId: "405311501286",
    appId: "1:405311501286:web:c72a1d38008cbaadbf5c27"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};