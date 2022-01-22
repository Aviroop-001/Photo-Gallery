import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnJvue_l6kTIR_VJmn1Exzb_ShF9BJvRk",
    authDomain: "photo-gallery-55940.firebaseapp.com",
    projectId: "photo-gallery-55940",
    storageBucket: "photo-gallery-55940.appspot.com",
    messagingSenderId: "157541666010",
    appId: "1:157541666010:web:9c90a0307cb3ace72be9e3"
  };
  
  // Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };