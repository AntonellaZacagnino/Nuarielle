import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBeUffaGFnt77er5JGlTbw-OmHDgZV_Kuk",
    authDomain: "nuarielle.firebaseapp.com",
    projectId: "nuarielle",
    storageBucket: "nuarielle.appspot.com",
    messagingSenderId: "266870445144",
    appId: "1:266870445144:web:31d1774f0b8b9f68ac262d"
})

export function getFirebase(){
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}