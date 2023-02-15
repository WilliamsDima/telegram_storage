import React, { memo, useEffect } from 'react'
import styles from './style.module.scss'
import HomeFolders from '../../molecules/HomeFolders'
import { CgInfinity } from 'react-icons/cg'
import { useIntersection } from '../../../hooks/useIntersection'
import cn from 'classnames'

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
      <HomeFolders visible={visible} />

      <div className={styles.titleBlock}>
        <h2>бесконечное хранилище</h2>

        <div className={styles.infinity}>
          <CgInfinity fontSize={450} style={{ marginRight: '1rem' }} />
        </div>
      </div>
    </section>
  )
})

export default HomeSecondSection
