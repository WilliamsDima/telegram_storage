import React, { memo, useState } from 'react'
import styles from './style.module.scss'
import HomeFolders from '../../../molecules/HomeFolders'
import { CgInfinity } from 'react-icons/cg'
import SectionText from '../../../atoms/SectionText'
import Section from '../Section'

const HomeSecondSection = memo(() => {
  const [visible, setVisible] = useState(false)

  return (
    <Section setVisible={setVisible} overStyle={{ height: '50vh' }}>
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
