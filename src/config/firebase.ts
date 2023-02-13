import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  deleteUser,
  GoogleAuthProvider,
} from 'firebase/auth'
import { initializeApp, FirebaseOptions } from 'firebase/app'
import {
  doc,
  DocumentData,
  getDoc,
  getFirestore,
} from 'firebase/firestore/lite'

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
auth.languageCode = 'ru'

export const getUserData = async (
  id: string
): Promise<DocumentData | undefined> => {
  const docRef = doc(db, 'users', id)
  const docSnap = await getDoc(docRef)
  const data = docSnap.data()
  return data
}

export const register = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
  return signOut(auth)
}

export const deleteProfile = (user: any) => {
  return deleteUser(user)
}

export const recovery = (email: string) => {
  return sendPasswordResetEmail(auth, email)
}
