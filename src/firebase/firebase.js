import { getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1VylnIrp7ZR_HVrkv6RU0UrINxOvB0co",
  authDomain: "movieverse-d6f16.firebaseapp.com",
  projectId: "movieverse-d6f16",
  storageBucket: "movieverse-d6f16.appspot.com",
  messagingSenderId: "369018745152",
  appId: "1:369018745152:web:b846cbbf7ce970e4024aa5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
