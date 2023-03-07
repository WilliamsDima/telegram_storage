import cn from 'classnames'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { DISK_PATH } from '../../../services/constans'
import Loader from '../../atoms/Loader'
import Meta from '../../atoms/Meta'
import MyParticles from '../../atoms/MyParticles'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'
import styles from './style.module.scss'

type Page = {
  children: React.ReactNode
}

const Page: FC<Page> = ({ children }) => {
  const { isLoading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) router.push('/')
  }, [user])

  return (
    <div className={styles.container}>
      <Loader active={isLoading || (router.pathname === DISK_PATH && !user)} />
      <Meta />
      {!isLoading && !(router.pathname === DISK_PATH && !user) && (
        <>
          <Header />
          <MyParticles />
          <main
            className={cn(styles.main, {
              [styles.disk]: user,
            })}
          >
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Page
