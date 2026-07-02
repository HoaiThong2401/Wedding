import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyASxhdpisE2spNYvwa4UHN6kR_Ov3f6QIE",
  authDomain: "wedding-invitation-260620.firebaseapp.com",
  databaseURL: "https://wedding-invitation-260620-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-invitation-260620",
  storageBucket: "wedding-invitation-260620.firebasestorage.app",
  messagingSenderId: "438169032040",
  appId: "1:438169032040:web:48652288ae173f5648b2dd",
  measurementId: "G-C103WNQBMR"
};


const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)