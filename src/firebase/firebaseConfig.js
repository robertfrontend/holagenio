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
  apiKey: "AIzaSyBEEzQ__uAZy-9UgdNyp9v6owUIaP6SKKY",
  authDomain: "holagenio-69e33.firebaseapp.com",
  projectId: "holagenio-69e33",
  storageBucket: "holagenio-69e33.firebasestorage.app",
  messagingSenderId: "689478462045",
  appId: "1:689478462045:web:ba94ae51bd1acd29a73bb4",
  measurementId: "G-EC7EVQW3LK",
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

export const auth = getAuth(app);

export { app };
