import Loader from '@atoms/Loader'
import Meta from '@atoms/Meta'
import MyParticles from '@atoms/MyParticles'
import { useAppSelector } from '@hooks/hooks'
import { useAuth } from '@hooks/useAuth'
import Footer from '@organisms/Footer'
import Header from '@organisms/Header'
import Modal from '@organisms/Modal'
import ModalCreater from '@organisms/ModalCreater'
import TooltipEvents from '@organisms/TooltipEvents'
import { DISK_PATH } from '@services/constans'
import cn from 'classnames'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import styles from './style.module.scss'

type Page = {
  children: React.ReactNode
}

const Page: FC<Page> = ({ children }) => {
  const { isLoading, user } = useAuth()
  const router = useRouter()
  const { message } = useAppSelector((store) => store.main)

  useEffect(() => {}, [user, message])

  return (
    <div className={styles.container}>
      <Loader active={isLoading || (router.pathname === DISK_PATH && !user)} />
      <Meta />
      <Modal open={!!message}>
        <ModalCreater />
      </Modal>
      <TooltipEvents />
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
