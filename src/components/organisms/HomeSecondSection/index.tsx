import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import HomeFolders from '../../molecules/HomeFolders'
import { CgInfinity } from 'react-icons/cg'
import { useIntersection } from '../../../hooks/useIntersection'
import cn from 'classnames'
import SectionText from '../../atoms/SectionText'

const HomeSecondSection = memo(() => {
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
        <HomeFolders visible={visible} />
      </div>

      <div className={styles.item}>
        <SectionText title={'бесконечное хранилище'} visible={visible}>
          <CgInfinity fontSize={450} style={{ marginRight: '1rem' }} />
        </SectionText>
      </div>
    </section>
  )
})

export default HomeSecondSection
