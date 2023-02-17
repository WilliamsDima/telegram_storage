import React, { FC } from 'react'
import Button from '../../atoms/Button'
import HomeFirstSection from '../../organisms/HomeFirstSection'
import HomeFourthSection from '../../organisms/HomeFourthSection'
import HomeSecondSection from '../../organisms/HomeSecondSection'
import HomeThridSection from '../../organisms/HomeThridSection'
import styles from './style.module.scss'

type Page = {}

const HomeTemplate: FC<Page> = ({}) => {
  return (
    <div className={styles.container}>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThridSection />
      <HomeFourthSection />
      <div className={styles.btn}>
        <Button pulseAnim>начать пользоваться</Button>
      </div>
    </div>
  )
}

export default HomeTemplate
