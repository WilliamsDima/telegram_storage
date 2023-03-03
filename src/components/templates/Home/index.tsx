import React, { FC } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import Button from '../../atoms/Button'
import HomeFirstSection from '../../organisms/Sections/HomeFirstSection'
import HomeFourthSection from '../../organisms/Sections/HomeFourthSection'
import HomeSecondSection from '../../organisms/Sections/HomeSecondSection'
import HomeThridSection from '../../organisms/Sections/HomeThridSection'
import styles from './style.module.scss'

type Page = {}

const HomeTemplate: FC<Page> = ({}) => {
  const { signIn } = useAuth()

  return (
    <div className={styles.container}>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThridSection />
      <HomeFourthSection />
      <div className={styles.btn}>
        <Button onClick={signIn} pulseAnim>
          начать пользоваться
        </Button>
      </div>
    </div>
  )
}

export default HomeTemplate
