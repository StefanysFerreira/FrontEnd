import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNUCybsmS1XDQpEep8UqujEWmI5rpwUpc",
  authDomain: "apifront-end.firebaseapp.com",
  projectId: "apifront-end",
  storageBucket: "apifront-end.appspot.com",
  messagingSenderId: "68801988307",
  appId: "1:68801988307:web:032f49a36789acf934b626",
  measurementId: "G-8WR27HM6TG"
};

const app = initializeApp(firebaseConfig);

export{app};