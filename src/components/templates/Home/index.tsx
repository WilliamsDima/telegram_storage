import React, { FC } from 'react'
import Button from '../../atoms/Button'
import Footer from '../../organisms/Footer'
import HomeFirstSection from '../../organisms/Sections/HomeFirstSection'
import HomeFourthSection from '../../organisms/Sections/HomeFourthSection'
import HomeSecondSection from '../../organisms/Sections/HomeSecondSection'
import HomeThridSection from '../../organisms/Sections/HomeThridSection'
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
      <Footer />
    </div>
  )
}

export default HomeTemplate
