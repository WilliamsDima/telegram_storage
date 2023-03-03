import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useDisk } from '../../../context/diskContext'
import Input from '../../atoms/Input'
import { useInput } from '../../../hooks/useInput'
import { FOLDER_NAME_MAX_LENGTH } from '../../../services/constans'
import Button from '../../atoms/Button'

type Modal = {}

const ModalCreater: FC<Modal> = memo(({}) => {
  const { setIsShowModalCreater } = useDisk()
  const { bind, reset } = useInput('Новая папка')
  const handleFocus = (event) => event.target.select()

  const closeHandler = () => {
    reset()
    setIsShowModalCreater(false)
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
      />

      <div className={styles.btn}>
        <Button shadowClick={false}>создать</Button>
      </div>
    </div>
  )
})

export default ModalCreater
