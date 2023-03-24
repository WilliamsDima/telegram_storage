import React, { memo, FC, useEffect } from 'react'
import styles from './style.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import cn from 'classnames'
import { useAppSelector } from '@hooks/hooks'
import { useActions } from '@hooks/useActions'
import Button from '@storybook/atoms/Button'

const ModalMessage: FC = memo(() => {
  const { message } = useAppSelector((store) => store.main)
  const { setMessage } = useActions()

  const closeHandler = () => {
    setMessage(null)
  }

  const doneHandler = () => {
    message?.callback()
    closeHandler()
  }

  useEffect(() => {}, [])

  return (
    <>
      {!!message && (
        <div className={styles.messageContent}>
          {message?.title && (
            <h1
              className={cn({
                [styles.error]: message.error,
              })}
            >
              {message.title}
            </h1>
          )}
          <p>{message.text}</p>

          <AiOutlineClose className={styles.close} onClick={closeHandler} />

          <div className={styles.btns}>
            <Button shadowClick={false} onClick={closeHandler}>
              отмена
            </Button>
            <Button shadowClick={false} onClick={doneHandler}>
              ок
            </Button>
          </div>
        </div>
      )}
    </>
  )
})

export default ModalMessage
