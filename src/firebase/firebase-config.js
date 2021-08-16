import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjtDRQeBRWu18n1fZychAURhK5qRlTvn0",
  authDomain: "anime-shop-dede9.firebaseapp.com",
  projectId: "anime-shop-dede9",
  storageBucket: "anime-shop-dede9.appspot.com",
  messagingSenderId: "1023475050790",
  appId: "1:1023475050790:web:46ea1ec0f2028e344ab9e7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
