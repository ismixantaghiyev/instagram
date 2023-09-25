
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAh0qfUDyVvBrp-lvke3sc72njPQtLsWGI",
  authDomain: "ismixan-6005b.firebaseapp.com",
  databaseURL: "https://ismixan-6005b-default-rtdb.firebaseio.com",
  projectId: "ismixan-6005b",
  storageBucket: "ismixan-6005b.appspot.com",
  messagingSenderId: "467461163304",
  appId: "1:467461163304:web:35f0162d3160d9e05d281d",
  measurementId: "G-1Q6MDJFTZW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth