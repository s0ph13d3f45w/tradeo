import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAf00p7TrnFV-1dMD5dajve5F34RUded94",
    authDomain: "tradeo-ff7fd.firebaseapp.com",
    databaseURL: "https://tradeo-ff7fd.firebaseio.com",
    projectId: "tradeo-ff7fd",
    storageBucket: "tradeo-ff7fd.appspot.com",
    messagingSenderId: "212346736314",
    appId: "1:212346736314:web:519e6e449be4b0de963c83"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase