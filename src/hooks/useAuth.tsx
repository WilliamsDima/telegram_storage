/* eslint-disable @typescript-eslint/no-shadow */
import {
  onAuthStateChanged,
  User as FirebaseUser,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { doc, setDoc, DocumentData, updateDoc } from 'firebase/firestore/lite'
import React, {
  FC,
  useState,
  useMemo,
  createContext,
  useContext,
  useEffect,
  ReactElement,
} from 'react'
import { deleteUserAPI } from 'src/api/firebase/firebase'
import {
  auth,
  db,
  deleteProfile,
  getUserData,
  login,
  logout,
  provider,
  recovery,
  register,
} from '../config/firebase'
import { useActions } from './useActions'

type IContext = {
  user: FirebaseUser | null
  isLoading: boolean
  signIn: () => void
  logout: () => void
}

const AuthContext = createContext<IContext>({} as IContext)

type AuthProviderType = {
  children: ReactElement | boolean
}

export const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(auth?.currentUser)

  const [isLoadingInitial, setIsLoadingInitial] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setUserAC } = useActions()

  const createUser = async (user: FirebaseUser) => {
    const id = user.providerData[0].uid

    // const isUser = await getDataUser(user)

    // if (!!isUser) {
    //   await updateDoc(doc(db, 'users', id), {
    //     id,
    //     name: user.displayName,
    //     email: user.email,
    //   })
    // } else {
    //   await setDoc(doc(db, 'users', id), {
    //     id,
    //     name: user.displayName,
    //     email: user.email,
    //     codes: [],
    //   })
    // }
  }

  const signIn = async () => {
    setIsLoading(true)
    try {
      const res = await signInWithPopup(auth, provider)
      const userData = res.user

      createUser(userData)
      setUser(userData)
    } catch (error) {
      console.error('signIn error', error)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      await signOut(auth)
      setUser(null)
    } catch (error) {
      console.log('logout error', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: any) => {
      setIsLoading(true)
      if (user) {
        setUser(user)
        // getUser(user.uid)
        setIsLoadingInitial(false)
        setIsLoading(false)
      } else {
        setUser(null)
        setIsLoading(false)
      }
    })

    return unsub
  }, [])

  const value = useMemo(() => {
    return {
      user,
      isLoading,
      signIn,
      logout,
    }
  }, [user, isLoading])

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
