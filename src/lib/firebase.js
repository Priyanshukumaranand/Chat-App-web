import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b7d7c.firebaseapp.com",
  projectId: "reactchat-b7d7c",
  storageBucket: "reactchat-b7d7c.appspot.com",
  messagingSenderId: "720224876738",
  appId: "1:720224876738:web:4ac6412c3eb3e94dd3a35b"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()