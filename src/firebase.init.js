// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApMHq7QBUN-aiW9Lcgl4izhqQuHf4jXJY",
  authDomain: "heart-treatment.firebaseapp.com",
  projectId: "heart-treatment",
  storageBucket: "heart-treatment.appspot.com",
  messagingSenderId: "360633447648",
  appId: "1:360633447648:web:280d84995dc46f96b38c85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;