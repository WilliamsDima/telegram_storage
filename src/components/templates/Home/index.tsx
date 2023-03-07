import React, { FC } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import Button from '../../atoms/Button'
import HomeFirstSection from '../../organisms/Sections/HomeFirstSection'
import HomeFourthSection from '../../organisms/Sections/HomeFourthSection'
import HomeSecondSection from '../../organisms/Sections/HomeSecondSection'
import HomeThridSection from '../../organisms/Sections/HomeThridSection'
import { AiFillCloud } from 'react-icons/ai'
import styles from './style.module.scss'
import { useRouter } from 'next/router'
import { DISK_PATH } from '../../../services/constans'

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
