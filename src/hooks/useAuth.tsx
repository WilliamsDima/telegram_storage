/* eslint-disable @typescript-eslint/no-shadow */
import {
  onAuthStateChanged,
  User as FirebaseUser,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { doc, setDoc, DocumentData, updateDoc } from 'firebase/firestore/lite'
import { useRouter } from 'next/router'
import React, {
  FC,
  useState,
  useMemo,
  createContext,
  useContext,
  useEffect,
  ReactElement,
} from 'react'
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
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const createUser = async (user: FirebaseUser) => {
    const userData = {
      id: user.uid,
      dateCreate: +new Date(),
    }
    try {
      await setDoc(doc(db, 'users', user.uid), userData)
    } catch (error) {
      console.log('createUser error', error)
    }
  }

  const signIn = async () => {
    setIsLoading(true)
    try {
      const res = await signInWithPopup(auth, provider)
      const userData = res.user

      const isUser = await getUserData(userData.uid)

      !isUser && createUser(userData)
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
      router.push('/')
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
