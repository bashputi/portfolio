
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAm9IN3Yl7HlhE71yqbxyXL9Vp-Q9_1XQQ",
  authDomain: "my-portfolio-cd7e9.firebaseapp.com",
  projectId: "my-portfolio-cd7e9",
  storageBucket: "my-portfolio-cd7e9.appspot.com",
  messagingSenderId: "412845250950",
  appId: "1:412845250950:web:235e3ba172350d254bf407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;