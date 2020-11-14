import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBl7xAdzzQQfIqrpm-1RnBNmxxQ2TictOo",
    authDomain: "olx-clone-syedhussain01.firebaseapp.com",
    databaseURL: "https://olx-clone-syedhussain01.firebaseio.com",
    projectId: "olx-clone-syedhussain01",
    storageBucket: "olx-clone-syedhussain01.appspot.com",
    messagingSenderId: "850273842275",
    appId: "1:850273842275:web:9b5fc5491affcc86b07456",
    measurementId: "G-B5DYX2T07L"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;