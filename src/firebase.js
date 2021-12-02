import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCDD0xQoQy-C6f3gg1orLYKLCpYWRiq40M",
    authDomain: "disney-clone-65108.firebaseapp.com",
    projectId: "disney-clone-65108",
    storageBucket: "disney-clone-65108.appspot.com",
    messagingSenderId: "459403992433",
    appId: "1:459403992433:web:a45dac1ac655a3caf8aad0",
    measurementId: "G-4C4PZBJF31"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;