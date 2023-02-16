import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import { useIntersection } from '../../../hooks/useIntersection'
import cn from 'classnames'
import PhotoCollages from '../PhotoCollages'
import Image from 'next/image'
import SectionText from '../../atoms/SectionText'

const HomeFourthSection = memo(() => {
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
        <div className={styles.template}>
          <span>тут дожен быть скриншот</span>
        </div>
      </div>

      <div className={styles.item}>
        <SectionText
          title={'UI/UX'}
          textStyle={{ width: '40%' }}
          text={'Интуитивно понятный и удобный дизайн для использования.'}
          visible={visible}
          img="/images/ui.png"
        />
      </div>
    </section>
  )
})

export default HomeFourthSection
