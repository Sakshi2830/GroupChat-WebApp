
import firebase from 'firebase'   
import 'firebase/firestore'
import 'firebase/auth'
import"firebase/"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMaeJqpQYfUXnBTosrXI44bscjH2LYgKs",
    authDomain: "whatsapp-cool-clone.firebaseapp.com",
    projectId: "whatsapp-cool-clone",
    storageBucket: "whatsapp-cool-clone.appspot.com",
    messagingSenderId: "623899443090",
    appId: "1:623899443090:web:2a7b9ba07fbdcfda0d8b4b",
    measurementId: "G-DYPKVYNL0J"
  };
   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db  = firebaseApp.firestore();
   const auth = firebaseApp.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   export{ auth, provider};
   export default db;