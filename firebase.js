// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLsaUg0PCp05OhxmNgnZ8YXHdRVYX9zcM",
  authDomain: "brainbox-bed6f.firebaseapp.com",
  projectId: "brainbox-bed6f",
  storageBucket: "brainbox-bed6f.appspot.com",
  messagingSenderId: "335586535249",
  appId: "1:335586535249:web:bc08539a2071a7acd55570"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)