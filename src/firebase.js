import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDAfzc0RxiBwOSgTsKFZLLdnIp49SQ7U2o",
    authDomain: "netflix-redux-46fd8.firebaseapp.com",
    projectId: "netflix-redux-46fd8",
    storageBucket: "netflix-redux-46fd8.appspot.com",
    messagingSenderId: "273955145180",
    appId: "1:273955145180:web:67c3576be3d21bab3fbb19"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;