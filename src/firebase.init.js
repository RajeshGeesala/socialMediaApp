// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDR-g6xtcOoShV0Bn7U4QDuVlUDTzOg480",
//   authDomain: "twitter-8aad5.firebaseapp.com",
//   projectId: "twitter-8aad5",
//   storageBucket: "twitter-8aad5.appspot.com",
//   messagingSenderId: "933034621134",
//   appId: "1:933034621134:web:2d603ff9da4bfb55cc789f",
//   measurementId: "G-S57QTDD3J0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWz4mOg-R_zHL0X45APYkoKUQMVwV627o",
  authDomain: "task-auth-3f7d3.firebaseapp.com",
  projectId: "task-auth-3f7d3",
  storageBucket: "task-auth-3f7d3.appspot.com",
  messagingSenderId: "1012948842537",
  appId: "1:1012948842537:web:510f7c41e522b56cd18438",
  measurementId: "G-D9HBS73WFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
export default auth ;