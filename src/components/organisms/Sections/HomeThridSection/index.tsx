import React, { memo, useState } from 'react'
import styles from './style.module.scss'
import Section from '../Section'
import PhotoCollages from '@organisms/PhotoCollages'
import SectionText from '@atoms/SectionText'

const HomeThridSection = memo(() => {
  const [visible, setVisible] = useState(false)

  return (
    <Section setVisible={setVisible}>
      <div className={styles.item}>
        <PhotoCollages visible={visible} />
      </div>

      <div className={styles.item}>
        <SectionText
          title={`сохраняйте сколько
          
          угодно фото и видео`}
          text={`В жизни так много котиков и пёсиков, 
          которых хочется запомнить.`}
          visible={visible}
          img={'/images/img.png'}
        />
      </div>
    </Section>
  )
})

export default HomeThridSection
