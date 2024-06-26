import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import {getAuth} from "firebase/auth";
// import {...} from "firebase/database";
import {getFirestore} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
import {
  API_KEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  MESSEGINGSENDERID,
  APPID,
  MEASURMENTID
} from '@env';
// Initialize Firebase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSEGINGSENDERID,
  appId: APPID,
  measurementId: MEASURMENTID,
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const db = getFirestore(app)
const fireAuth = getAuth(app)

export {db, fireAuth, app}

