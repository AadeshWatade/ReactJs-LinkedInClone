import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCdrYXnuBtNA3nZsuYI4Ep28VJ-n1uRQBo',
  authDomain: 'linkedin-clone-d7d1e.firebaseapp.com',
  projectId: 'linkedin-clone-d7d1e',
  storageBucket: 'linkedin-clone-d7d1e.appspot.com',
  messagingSenderId: '569535554647',
  appId: '1:569535554647:web:5e5465dbc0c6a2ed662f12',
};

// export const app = initializeApp(firebaseConfig);
export const app = firebase.initializeApp(firebaseConfig);
// export const db = initializeFirestore(app)
// export const db = firebase.initializeFirestore(app)
export const db = app.firestore();

export const auth = firebase.auth();
