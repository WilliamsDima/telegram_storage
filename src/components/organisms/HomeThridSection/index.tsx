import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import { useIntersection } from '../../../hooks/useIntersection'
import cn from 'classnames'
import PhotoCollages from '../PhotoCollages'
import Image from 'next/image'
import SectionText from '../../atoms/SectionText'

const HomeThridSection = memo(() => {
  const { visible, ref } = useIntersection(1)

  useEffect(() => {}, [visible])

  return (
    <section
      className={cn(styles.section, {
        [styles.visible]: visible,
      })}
      ref={ref}
    >
      <div className={styles.item}>
        <PhotoCollages visible={visible} />
      </div>

      <div className={styles.item}>
        <SectionText
          title={`сохраняйте сколько угодно фото и видео`}
          textStyle={{ width: '40%' }}
          titleStyle={{ fontSize: 40, width: '60%' }}
          text={`В жизни так много котиков и пёсиков, которых хочется запомнить.`}
          visible={visible}
          img={'/images/img.png'}
        />
      </div>
    </section>
  )
})

export default HomeThridSection
