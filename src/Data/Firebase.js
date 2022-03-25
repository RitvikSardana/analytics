// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDes5pIsMKckFr58OWz4JudPff9ikyhgnU",
    authDomain: "major-project-15fde.firebaseapp.com",
    projectId: "major-project-15fde",
    storageBucket: "major-project-15fde.appspot.com",
    messagingSenderId: "757516514787",
    appId: "1:757516514787:web:4b1f374017567ddcf19cd6",
    measurementId: "G-MT8WQCCPQM"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);

export default db