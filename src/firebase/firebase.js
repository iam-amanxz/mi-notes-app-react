import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCOlJEdmpA6faBIjCtbBDqXwkATXNhjmyo",
  authDomain: "mi-notes-6c337.firebaseapp.com",
  databaseURL: "https://mi-notes-6c337.firebaseio.com",
  projectId: "mi-notes-6c337",
  storageBucket: "mi-notes-6c337.appspot.com",
  messagingSenderId: "10736199940",
  appId: "1:10736199940:web:e55a8ceb692186d21f0851",
  measurementId: "G-XR36WZ9V6N"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
