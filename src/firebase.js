import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAy2RShjEDkrKTdj21fwKb8EYv3GoJ-XVI",
  authDomain: "music-96858.firebaseapp.com",
  projectId: "music-96858",
  storageBucket: "music-96858.appspot.com",
  messagingSenderId: "464431140688",
  appId: "1:464431140688:web:f56559265a8e436c766655"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Fetch all albums from the Realtime Database

export default app;


