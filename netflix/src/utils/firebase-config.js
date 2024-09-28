import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByBUXE2bVAcwkIGfjg-_12hWbpLp2XcwU",
  authDomain: "react-netflix-clone-85033.firebaseapp.com",
  projectId: "react-netflix-clone-85033",
  storageBucket: "react-netflix-clone-85033.appspot.com",
  messagingSenderId: "630903826435",
  appId: "1:630903826435:web:404e62545f723e7aa04636",
  measurementId: "G-B02P1T4RR9"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);