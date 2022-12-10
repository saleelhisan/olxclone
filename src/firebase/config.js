import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAg_Xg1nAx-hy0lGTlQmjXefr2NBHxv7fA",
    authDomain: "fir-88e93.firebaseapp.com",
    projectId: "fir-88e93",
    storageBucket: "fir-88e93.appspot.com",
    messagingSenderId: "607874936808",
    appId: "1:607874936808:web:057f4e22cf6e17d3987e5d",
    measurementId: "G-K5QHHDBG7X"
  };
export default firebase.initializeApp(firebaseConfig)
