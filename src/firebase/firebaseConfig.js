// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGyJZdj908LD3of8cQbW8kwRfaBfumrsg",
  authDomain: "bizcategories.firebaseapp.com",
  projectId: "bizcategories",
  storageBucket: "bizcategories.appspot.com",
  messagingSenderId: "134491327409",
  appId: "1:134491327409:web:3f1a7ac54b919db16f4b90",
  measurementId: "G-NGVWBC2BNR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

export async function uploadFile(file, name) {
  try {
    const storageRef = ref(storage, `/upload_images/${name}`);

    await uploadBytes(storageRef, file);
    let data = await getDownloadURL(storageRef);

    return data;
  } catch (error) {
    console.log(error, "error upload file");
  }
}

export const getUserData = async () => {
  const user = auth.currentUser;
  console.log(auth, "auth");
  if (user) {
    const uid = user.uid;

    try {
      const userDoc = await db.collection("users").doc(uid).get();
      if (userDoc.exists) {
        console.log("User Data:", userDoc.data());
        return userDoc.data();
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  } else {
    console.log("No user is signed in.");
  }
};

export const auth = getAuth(app);

export { app };
