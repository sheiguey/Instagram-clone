import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDuJcaPqk8n1LF2QrvTyBlU2C08Xq5tUfk",
  authDomain: "instagram-clone-c24c2.firebaseapp.com",
  projectId: "instagram-clone-c24c2",
  storageBucket: "instagram-clone-c24c2.appspot.com",
  messagingSenderId: "571242362877",
  appId: "1:571242362877:web:79e86f43b8728217eecb94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export {app,db,auth,storage};