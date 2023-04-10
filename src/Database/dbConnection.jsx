import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3S0VySLKqMgJVgrMnCH7l6StqD-a7_vo",
  authDomain: "skillboard-project-718a3.firebaseapp.com",
  projectId: "skillboard-project-718a3",
  storageBucket: "skillboard-project-718a3.appspot.com",
  messagingSenderId: "159491603653",
  appId: "1:159491603653:web:c244e3df9271dd8577c4ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
