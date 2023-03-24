import {
  doc,
  updateDoc,
  getDoc,
  DocumentData,
  deleteDoc,
} from 'firebase/firestore/lite'
import { db } from '../../config/firebase'
import { IFolder } from '../../stores/redusers/main/types'
import { User as FirebaseUser } from 'firebase/auth'

export const updateItemAPI = async (user: FirebaseUser, folders: IFolder[]) => {
  await updateDoc(doc(db, 'users', user.uid), {
    folders,
  })
}

export const updateProfileAPI = async (user: any, displayName: string) => {
  await updateDoc(doc(db, 'users', user.id), {
    displayName,
  })
}

export const deleteUserAPI = async (id: string) => {
  await deleteDoc(doc(db, 'users', id))
}

export const getDataUser = async (user: DocumentData) => {
  const docRef = doc(db, 'users', user.uid)
  const docSnap = await getDoc(docRef)
  const data = docSnap.data()
  return data
}
