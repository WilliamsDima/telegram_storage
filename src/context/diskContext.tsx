import { useOutside } from '@hooks/useOutside'
import { IFolder } from '@stores/redusers/main/types'
import {
  useContext,
  createContext,
  useMemo,
  FC,
  ReactElement,
  RefObject,
  MouseEvent,
  useState,
} from 'react'

type IContext = {
  showModalCreater: boolean
  showContextMenu: boolean
  refModalCreater: RefObject<HTMLDivElement>
  refContextMenu: RefObject<HTMLDivElement>
  setIsShowModalCreater: (value: boolean) => void
  setIsShowContextMenu: (value: boolean) => void
  isFolderContext: IFolder | null
  copyFolder: IFolder | null
  setCopyFolder: (value: IFolder | null) => void
  setIsFolderContext: (value: IFolder | null) => void
  handleClickContextMenu: (e: MouseEvent<HTMLDivElement>) => void
  xYPosistion: {
    x: number
    y: number
  }
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

  const [isFolderContext, setIsFolderContext] = useState<null | IFolder>(null)
  const [copyFolder, setCopyFolder] = useState<null | IFolder>(null)

  const {
    isShow: showContextMenu,
    ref: refContextMenu,
    setIsShow: setIsShowContextMenu,
  } = useOutside(false)

  const [xYPosistion, setXyPosistion] = useState({ x: 0, y: 0 })

  const handleClickContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const positionChange = {
      x: e.pageX,
      y: e.pageY,
    }
    setXyPosistion(positionChange)
    setIsShowContextMenu(true)

    if (
      e.target instanceof HTMLElement &&
      !e.target.closest('div[class*="folderWrapper"]')
    ) {
      setIsFolderContext(null)
    }
  }

  const value = useMemo(() => {
    return {
      refModalCreater,
      showModalCreater,
      setIsShowModalCreater,
      isFolderContext,
      setIsFolderContext,
      showContextMenu,
      refContextMenu,
      setIsShowContextMenu,
      handleClickContextMenu,
      xYPosistion,
      copyFolder,
      setCopyFolder,
    }
  }, [
    refModalCreater,
    showModalCreater,
    isFolderContext,
    showContextMenu,
    refContextMenu,
    xYPosistion,
    copyFolder,
  ])

  return <DiskContext.Provider value={value}>{children}</DiskContext.Provider>
}

export const useDisk = () => {
  return useContext(DiskContext)
}
