import React, { memo, FC, useEffect, useMemo } from 'react'
import styles from './style.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useDisk } from '../../../context/diskContext'
import Input from '../../atoms/Input'
import { useInput } from '../../../hooks/useInput'
import { FOLDER_NAME_MAX_LENGTH } from '../../../services/constans'
import Button from '../../atoms/Button'
import { useActions } from '../../../hooks/useActions'
import { IFolder } from '../../../stores/redusers/main/types'
import { useAppSelector } from '../../../hooks/hooks'

type Modal = {}

const ModalCreater: FC<Modal> = memo(({}) => {
  const { setIsShowModalCreater, isFolderContext } = useDisk()
  const { bind, reset, value, error, setError, setValue } = useInput(
    isFolderContext?.name || 'Новая папка'
  )
  const { folders, foldersPath } = useAppSelector((store) => store.main)
  const { addFolder, renameFolder, setTooltip } = useActions()
  const handleFocus = (event) => event.target.select()

  const foldersList = useMemo(() => {
    return foldersPath.length
      ? foldersPath[foldersPath.length - 1]?.folders
      : folders
  }, [foldersPath, folders])

  const closeHandler = () => {
    reset()
    setIsShowModalCreater(false)
    setError(null)
  }

  const createHandler = () => {
    const isName = foldersList.find((f) => f.name === value)

    const folder: IFolder = {
      id: isFolderContext?.id || +new Date(),
      folders: isFolderContext?.folders || [],
      name: value,
    }

    if (value.trim().length >= 1 && !isName && !isFolderContext) {
      addFolder(folder)
      setTooltip({
        text: 'Папка создана',
      })
      closeHandler()
    } else if (value.trim().length >= 1 && !isName && isFolderContext) {
      renameFolder(folder)
      setTooltip({
        text: 'Папка обновлена',
      })
      closeHandler()
    } else if (value.trim().length > 100) {
      setError({ message: 'максимальная длина 100 символов' })
    } else if (isName) {
      setError({ message: 'папка с таким именем уже существует' })
    } else {
      setError({ message: 'минимальная длина 1 символ' })
    }
  }

  useEffect(() => {
    if (isFolderContext) {
      setValue(isFolderContext.name)
    } else {
      setValue('Новая папка')
    }
  }, [isFolderContext])

  return (
    <div className={styles.modalContent}>
      <h1>{isFolderContext ? 'Новое название' : 'Название папки'}</h1>
      <AiOutlineClose className={styles.close} onClick={closeHandler} />
      <Input
        {...bind}
        alt={'folder name'}
        overStyle={{ margin: '2rem 0' }}
        maxLength={FOLDER_NAME_MAX_LENGTH}
        handleFocus={handleFocus}
        error={error}
      />

      <div className={styles.btn}>
        <Button shadowClick={false} onClick={createHandler}>
          сохранить
        </Button>
      </div>
    </div>
  )
})

export default ModalCreater
