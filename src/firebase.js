import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB2LcrydPO81dv4Y0rJJNZSRhgLFVQPZZo",
  authDomain: "netflix-clone-c3b26.firebaseapp.com",
  projectId: "netflix-clone-c3b26",
  storageBucket: "netflix-clone-c3b26.appspot.com",
  messagingSenderId: "164471682360",
  appId: "1:164471682360:web:592d83532ae9ab936ffdcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  }
  catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  }
  catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = async () => {
  signOut(auth)
}

export { auth, db, login, signup, logout }