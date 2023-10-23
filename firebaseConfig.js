import firebase from "firebase/app";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALBxooC9x7uQeiW9PfnsZTvkme8omqSdw",

    authDomain: "seisdepaus-d7d65.firebaseapp.com",

    projectId: "seisdepaus-d7d65",

    storageBucket: "seisdepaus-d7d65.appspot.com",

    messagingSenderId: "43710051350",

    appId: "1:43710051350:web:2d5f8dd376706395f7f137",

    measurementId: "G-52N9ECF8R0",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
