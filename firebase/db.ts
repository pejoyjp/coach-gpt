
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtOpVspjIG8-BAzCAfabiojEm8tcGPN38",
  authDomain: "coach-gpt-39351.firebaseapp.com",
  projectId: "coach-gpt-39351",
  storageBucket: "coach-gpt-39351.appspot.com",
  messagingSenderId: "834243022316",
  appId: "1:834243022316:web:35114a66b500a52a4684c9",
  measurementId: "G-8X11Q0BCNS"
};


const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase)
const db = getFirestore(firebase);

export {firebase,auth,db}
