import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
	apiKey: "AIzaSyDPDq63DOwb2b17cuArhYTzKcNEajvLRD0",
	authDomain: "multitask-6285a.firebaseapp.com",
	projectId: "multitask-6285a",
	storageBucket: "multitask-6285a.appspot.com",
	messagingSenderId: "779563520260",
	appId: "1:779563520260:web:fe64976c4ba32858ce8051"
});

// utils
const db = firebase.firestore();
const authorize = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

// collection references
const usersCollection = db.collection("users");
const categoriesCollection = db.collection("categories");

// export
export {db, authorize, timestamp, usersCollection, categoriesCollection};