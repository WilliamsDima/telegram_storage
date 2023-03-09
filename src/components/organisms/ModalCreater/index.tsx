import React, { memo, FC } from 'react'
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
  const { setIsShowModalCreater } = useDisk()
  const { bind, reset, value, error, setError } = useInput('Новая папка')
  const { folders } = useAppSelector((store) => store.main)
  const { addFolder } = useActions()
  const handleFocus = (event) => event.target.select()

  const closeHandler = () => {
    reset()
    setIsShowModalCreater(false)
    setError(null)
  }

  const createHandler = () => {
    const isName = folders.find((f) => f.name === value)

    const folder: IFolder = {
      id: +new Date(),
      folders: [],
      name: value,
    }

    if (value.trim().length >= 1 && !isName) {
      addFolder(folder)
      closeHandler()
    } else if (value.trim().length > 100) {
      setError({ message: 'максимальная длина 100 символов' })
    } else if (isName) {
      setError({ message: 'папка с таким именем уже существует' })
    } else {
      setError({ message: 'минимальная длина 1 символ' })
    }
  }

  return (
    <div className={styles.modalContent}>
      <h1>Название папки</h1>
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
          создать
        </Button>
      </div>
    </div>
  )
})

export default ModalCreater
