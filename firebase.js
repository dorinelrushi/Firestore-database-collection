import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBg4DBHgg5FERtbIzoW4UKXM5cPu__CiXw',
  authDomain: 'facebook-comme.firebaseapp.com',
  projectId: 'facebook-comme',
  storageBucket: 'facebook-comme.appspot.com',
  messagingSenderId: '665535519037',
  appId: '1:665535519037:web:fef25670ccb85cc43ecd54',
  measurementId: 'G-EKTT47HKBS',
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = app.storage();

export { db, storage };