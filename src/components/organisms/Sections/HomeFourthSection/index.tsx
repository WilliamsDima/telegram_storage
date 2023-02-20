import React, { memo, useState } from 'react'
import styles from './style.module.scss'
import SectionText from '../../../atoms/SectionText'
import Section from '../Section'
import cn from 'classnames'

const HomeFourthSection = memo(() => {
  const [visible, setVisible] = useState(false)

  return (
    <Section setVisible={setVisible} overStyle={{ height: '50vh' }}>
      <div
        className={cn(`${styles.item} ${styles.templateWrapp}`, {
          [styles.visible]: visible,
        })}
      >
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
    </Section>
  )
})

export default HomeFourthSection
