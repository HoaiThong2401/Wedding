import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBIM9Y-ZyTQWj3qaaH3qRcLja0erAYnZSE",
  authDomain: "wedding-invitation-df3f6.firebaseapp.com",
  databaseURL: "https://wedding-invitation-df3f6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-invitation-df3f6",
  storageBucket: "wedding-invitation-df3f6.firebasestorage.app",
  messagingSenderId: "54697079528",
  appId: "1:54697079528:web:845b525f069eb3ad9f0f5d",
  measurementId: "G-FX6ENL6B7L"
};


const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)