import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyARLFIvRYA2eJJK0BI2_BzLU4jeo7MS_jw",
    authDomain: "facebook-clone-e17be.firebaseapp.com",
    projectId: "facebook-clone-e17be",
    storageBucket: "facebook-clone-e17be.appspot.com",
    messagingSenderId: "815785197550",
    appId: "1:815785197550:web:9001a75c93c7e6ea3858ff",
    measurementId: "G-QJR0PJYNZQ"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;