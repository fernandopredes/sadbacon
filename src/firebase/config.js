import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBel48MTjQLrWBJwzdL26IoGLw7FaNssxU",
  authDomain: "sadbacon-e9f2f.firebaseapp.com",
  projectId: "sadbacon-e9f2f",
  storageBucket: "sadbacon-e9f2f.appspot.com",
  messagingSenderId: "720647624170",
  appId: "1:720647624170:web:3921ebc064ad954d0f4e93"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
