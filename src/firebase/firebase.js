import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBeUffaGFnt77er5JGlTbw-OmHDgZV_Kuk",
    authDomain: "nuarielle.firebaseapp.com",
    projectId: "nuarielle",
    storageBucket: "nuarielle.appspot.com",
    messagingSenderId: "266870445144",
    appId: "1:266870445144:web:31d1774f0b8b9f68ac262d"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };