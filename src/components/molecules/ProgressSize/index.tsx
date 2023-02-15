import React, { memo } from 'react'
import styles from './style.module.scss'
import { CgInfinity } from 'react-icons/cg'

const ProgressSize = memo(() => {
  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progress}>
        <span></span>
      </div>

      <div className={styles.infinity}>
        <p>занято 2 Гб из </p>
        <CgInfinity fontSize={20} style={{ marginRight: '1rem' }} />
      </div>
    </div>
  )
})

export default ProgressSize
