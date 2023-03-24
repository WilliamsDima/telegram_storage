import React, { FC } from 'react'
import { AiFillCloud } from 'react-icons/ai'
import styles from './style.module.scss'
import { useRouter } from 'next/router'
import { useAuth } from '@hooks/useAuth'
import { DISK_PATH } from '@services/constans'
import HomeFirstSection from '@organisms/Sections/HomeFirstSection'
import HomeSecondSection from '@organisms/Sections/HomeSecondSection'
import HomeThridSection from '@organisms/Sections/HomeThridSection'
import HomeFourthSection from '@organisms/Sections/HomeFourthSection'
import Button from '@storybook/atoms/Button'

type Page = {}

const HomeTemplate: FC<Page> = ({}) => {
  const { signIn, user } = useAuth()
  const router = useRouter()

  const btnHandler = () => {
    user ? router.push(DISK_PATH) : signIn()
  }

  return (
    <div className={styles.container}>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThridSection />
      <HomeFourthSection />
      <div className={styles.btn}>
        <Button onClick={btnHandler} pulseAnim>
          {user && (
            <AiFillCloud
              className={styles.cloudIcon}
              fontSize={16}
              style={{ marginRight: '1rem' }}
            />
          )}
          {user ? 'перейти в диск' : 'начать пользоваться'}
        </Button>
      </div>
    </div>
  )
}

export default HomeTemplate
