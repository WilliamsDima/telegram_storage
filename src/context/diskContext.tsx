import { useRouter } from 'next/router'
import {
  useContext,
  createContext,
  useMemo,
  FC,
  ReactElement,
  RefObject,
  useEffect,
} from 'react'
import Loader from '../components/atoms/Loader'
import { useAuth } from '../hooks/useAuth'
import { useOutside } from '../hooks/useOutside'

type IContext = {
  showModalCreater: boolean
  refModalCreater: RefObject<HTMLDivElement>
  setIsShowModalCreater: (value: boolean) => void
}

const DiskContext = createContext<IContext>({} as IContext)

type DiskProviderType = {
  children: ReactElement | boolean
}

export const DiskProvider: FC<DiskProviderType> = ({ children }) => {
  const {
    isShow: showModalCreater,
    ref: refModalCreater,
    setIsShow: setIsShowModalCreater,
  } = useOutside(false)

  const { user } = useAuth()
  const router = useRouter()

  const value = useMemo(() => {
    return {
      refModalCreater,
      showModalCreater,
      setIsShowModalCreater,
    }
  }, [refModalCreater, showModalCreater])

  useEffect(() => {
    if (!user) router.push('/')
  }, [user])

  return <DiskContext.Provider value={value}>{children}</DiskContext.Provider>
}

export const useDisk = () => {
  return useContext(DiskContext)
}
