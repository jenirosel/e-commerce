import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


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

export const db = getFirestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const docRef = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.log("No such document!");
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      const data = {displayName, email, createdAt, ...additionalData};
      const newUserRef = doc(db, "users", userAuth.uid);
      await setDoc(newUserRef, data);

    } catch (error) {
      console.log('error creating user', error.message);
    }
  } else {
    console.log("Document data:", docSnap.data());
  }
}

export const auth = getAuth(fireBaseApp);

// Trying out v9
// Sign in using a popup.
const provider = new GoogleAuthProvider();
// provider.addScope('profile');
provider.setCustomParameters({ prompt: 'select_account consent' });
// provider.addScope('email');
export const signInWithGoogle = () => signInWithPopup(auth, provider);
