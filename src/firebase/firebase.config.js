// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4btw_2wMSydvvBTmOGWZ8P1I0XYaZMdg",
  authDomain: "tasty-hub-b9f0c.firebaseapp.com",
  projectId: "tasty-hub-b9f0c",
  storageBucket: "tasty-hub-b9f0c.appspot.com",
  messagingSenderId: "960438159824",
  appId: "1:960438159824:web:f7fa8d3d614546a592d1d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;