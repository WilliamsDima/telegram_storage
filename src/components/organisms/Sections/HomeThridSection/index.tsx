import React, { memo, useState } from 'react'
import styles from './style.module.scss'
import PhotoCollages from '../../PhotoCollages'
import SectionText from '../../../atoms/SectionText'
import Section from '../Section'

const HomeThridSection = memo(() => {
  const [visible, setVisible] = useState(false)

  return (
    <Section setVisible={setVisible} overStyle={{ height: '50vh' }}>
      <div className={styles.item}>
        <PhotoCollages visible={visible} />
      </div>

      <div className={styles.item}>
        <SectionText
          title={`сохраняйте сколько угодно фото и видео`}
          textStyle={{ width: '40%' }}
          text={`В жизни так много котиков и пёсиков, которых хочется запомнить.`}
          visible={visible}
          img={'/images/img.png'}
        />
      </div>
    </Section>
  )
})

export default HomeThridSection
