import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

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

export const createUserProfileDocument = async (user, additionalData) =>{
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists){
    const {displayName, email, photoURL} = user
    const uid = snapshot.id
    const createdAt = new Date()

    try{
      await userRef.set({
        uid,
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      })
    } catch(error) {console.error('Error creating user', error)}
  }
  return await getUserDocument(user.uid)
}

export const getUserDocument = async uid =>{
  if (!uid) return null;
  try {
    return firestore.collection('users').doc(uid)
  } catch (error) {console.error('Error getting user', error)}
}

export const collectIdsAndData = doc => ({id: doc.id, ...doc.data()})
export const firestore = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase