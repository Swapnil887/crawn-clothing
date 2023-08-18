// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkORgcZKN9yl4ljkjitF7bPxOPmJ490vU",
  authDomain: "crwn-clothing-db-6e96b.firebaseapp.com",
  projectId: "crwn-clothing-db-6e96b",
  storageBucket: "crwn-clothing-db-6e96b.appspot.com",
  messagingSenderId: "544428619916",
  appId: "1:544428619916:web:e5d91fc88ee2db756663a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ promt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocument = async (userAuth, additionalInfo={}) => {
  const userDocRefrence = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRefrence);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRefrence, {
        displayName,
        createdAt,
        email,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    return userDocRefrence;
  }
};

export const creatAuthUserWithEmailAndPasword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPasword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (
  collectionName,
  objectToAdd
) => {
  const collectionRef = collection(db, collectionName);
  const batch = writeBatch(db);
  console.log(objectToAdd, "OBJECTtoadd");
  objectToAdd.forEach((ele) => {
    const docRef = doc(collectionRef, ele.title.toLowerCase());
    batch.set(docRef, ele);
  });

  await batch.commit();
};

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((accumulator, snapShot) => {
    const { title, items } = snapShot.data();
    accumulator[title.toLowerCase()] = items;
    return accumulator
  },[]);
  return categoryMap;
};







// const BUTTON_TYPE_CLASSES = {
//   base: 'base',
//   google: 'google-sign-in',
//   inverted: 'inverted',
// };

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//   ({
//     [BUTTON_TYPE_CLASSES.base]: 'base',
//     [BUTTON_TYPE_CLASSES.google]: 'inverted'
//   }[buttonType]);

// console.log(getButton())


