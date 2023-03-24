import React, { memo, useState } from 'react'
import styles from './style.module.scss'
import { CgInfinity } from 'react-icons/cg'
import Section from '../Section'
import HomeFolders from '@molecules/HomeFolders'
import SectionText from '@atoms/SectionText'

const HomeSecondSection = memo(() => {
  const [visible, setVisible] = useState(false)

  return (
    <Section setVisible={setVisible}>
      <div className={styles.item}>
        <HomeFolders visible={visible} />
      </div>

      <div className={styles.item}>
        <SectionText title={'бесконечное хранилище'} visible={visible}>
          <CgInfinity fontSize={450} />
        </SectionText>
      </div>
    </Section>
  )
})

export default HomeSecondSection
