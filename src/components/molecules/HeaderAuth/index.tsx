import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import { FcGoogle } from 'react-icons/fc'
import Button from '../../atoms/Button'
import { useAuth } from '../../../hooks/useAuth'
import UserHeader from '../UserHeader'

const HeaderAuth = memo(() => {
  const { user, signIn } = useAuth()

  useEffect(() => {}, [user])

  return (
    <div className={styles.auth}>
      {user ? (
        <UserHeader />
      ) : (
        <Button
          overStyles={{
            textTransform: 'uppercase',
            fontWeight: '700',
          }}
          onClick={signIn}
        >
          <FcGoogle
            className={styles.googleIcon}
            fontSize={20}
            style={{ marginRight: '1rem' }}
          />
          войти
        </Button>
      )}
    </div>
  )
})

export default HeaderAuth
