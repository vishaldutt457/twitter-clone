import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDTmX7vsDrTLwZhzyg0xinWXbQ9uJovntQ",
    authDomain: "twitterclone-30dc3.firebaseapp.com",
    projectId: "twitterclone-30dc3",
    storageBucket: "twitterclone-30dc3.appspot.com",
    messagingSenderId: "254921379292",
    appId: "1:254921379292:web:6cf75a3eb347fd98b1d319",
    measurementId: "G-6JYL42E4LH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;