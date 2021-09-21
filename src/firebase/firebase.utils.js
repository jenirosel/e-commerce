// import firebase from 'firebase/compat/app';
// import { getAuth } from "firebase/auth";

// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {initializeApp} from 'firebase/app'
//import {firestore} from 'firebase/firestore'


const config = {
  apiKey: "AIzaSyDTua51rL2VHjt8L36f3fnagve6pJUfKHM",
  authDomain: "ecommerce-db-51d9a.firebaseapp.com",
  databaseURL: "https://ecommerce-db-51d9a.firebaseio.com",
  projectId: "ecommerce-db-51d9a",
  storageBucket: "ecommerce-db-51d9a.appspot.com",
  messagingSenderId: "891372237075",
  appId: "1:891372237075:web:cfd1710afc764a96382ae6",
  measurementId: "G-5782378J7N"
};

export const fireBaseApp = initializeApp(config);
// export const auth = firebase.auth();

export const auth = getAuth(fireBaseApp);
//export const firestore = f;

// const provider = new firebase.auth.GoogleAuthProvider();
// const provider = new GoogleAuthProvider();


// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInwithPopup(provider);

// Trying out v9
// Sign in using a popup.
const provider = new GoogleAuthProvider();
// provider.addScope('profile');
provider.setCustomParameters({ prompt: 'select_account consent' });

// provider.addScope('email');
export const signInWithGoogle = () => signInWithPopup(auth, provider);
// export default signInWithGoogle;
// export const signInWithGoogle;