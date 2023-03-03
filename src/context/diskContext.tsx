import {
  useContext,
  createContext,
  useMemo,
  FC,
  ReactElement,
  RefObject,
} from 'react'
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

  const value = useMemo(() => {
    return {
      refModalCreater,
      showModalCreater,
      setIsShowModalCreater,
    }
  }, [refModalCreater, showModalCreater])

  return <DiskContext.Provider value={value}>{children}</DiskContext.Provider>
}

export const useDisk = () => {
  return useContext(DiskContext)
}
