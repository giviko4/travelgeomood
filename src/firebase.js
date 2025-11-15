import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <-- დავამატეთ
import { getFirestore } from "firebase/firestore"

// --- აქ ჩასვი შენი პირადი firebaseConfig კოდი ---

const firebaseConfig = {
  apiKey: "AIzaSyBcl8H_jdzc3C06BlRnNG_g3NPyCk3DoMA",
  authDomain: "travelgeomood-website.firebaseapp.com",
  projectId: "travelgeomood-website",
  storageBucket: "travelgeomood-website.firebasestorage.app",
  messagingSenderId: "1075510261723",
  appId: "1:1075510261723:web:b6b94c8221a5ede4c519fe",
  measurementId: "G-WFSFS3N6CG"
};

// აპლიკაციის ინიციალიზაცია
const app = initializeApp(firebaseConfig);

// ავთენტიფიკაციის სერვისის ექსპორტი
export const auth = getAuth(app); // <-- დავამატეთ
export const db = getFirestore(app);