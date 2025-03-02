const { db, auth } = require("@/firebase/firebaseConfig");
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";

export async function readDocuments(document) {
  const itemsRef = collection(db, document);
  const snapshot = await getDocs(itemsRef);
  const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  console.log(items);
  return snapshot;
}

export const GetPostsLostFound = async () => {
  const querySnapshot = await getDocs(collection(db, "lost-found"));
  const items = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return items;
};

export const GetPostLostFoundById = async (postId) => {
  const docRef = doc(db, "lost-found", postId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Post not found");
  }
};

export const PostCreateLostFound = async (object) => {
  try {
    const docRef = await addDoc(collection(db, "lost-found"), object);
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
  }

  // const docRef = await addDoc(collection(db, "lost-found"), object);
  // return docRef;
};
