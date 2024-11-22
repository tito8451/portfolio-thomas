// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// var admin = require("firebase-admin");
import { getFirestore } from "firebase/firestore";
// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd2X6RBQn3DACGSBnUVXSNS20ddCRXfz8",
  authDomain: "portofolio-9ef37.firebaseapp.com",
  projectId: "portofolio-9ef37",
  storageBucket: "portofolio-9ef37.firebasestorage.app",
  messagingSenderId: "514343292291",
  appId: "1:514343292291:web:f44e12d2d408bee4827ab6",
  measurementId: "G-HCMEW57S0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };