import React, { memo } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { HiFolder } from 'react-icons/hi'
import Section from '../Section'

const HomeFirstSection = memo(() => {
  return (
    <Section>
      <div className={styles.description}>
        <p className={styles.descriptionText}>
          <dfn title="Telegram Storage">Telegram Storage</dfn>Облачное
          хранилище, которое использует телеграм как основу. <br /> Поэтому вы
          можете быть уверены в его безопасности.
        </p>
      </div>

      <div className={styles.cloudRight}>
        <Image
          src="/images/cloud.png"
          alt="cloud"
          className={styles.cloud}
          width={1280}
          height={720}
        />

        <div className={`${styles.telegram} ${styles.imgBlock}`}>
          <Image
            src="/images/telegram.png"
            alt="telegram"
            width={128}
            height={128}
          />
        </div>

        <div className={`${styles.img} ${styles.imgBlock}`}>
          <Image src="/images/img.png" alt="img" width={128} height={128} />
        </div>

        <div className={`${styles.zip} ${styles.imgBlock}`}>
          <Image src="/images/zip.png" alt="zip" width={128} height={128} />
        </div>

        <div className={`${styles.doc} ${styles.imgBlock}`}>
          <Image src="/images/doc.png" alt="doc" width={128} height={128} />
        </div>

        <div className={`${styles.folder} ${styles.imgBlock}`}>
          <HiFolder className={styles.folderIcon} />
        </div>
      </div>
    </Section>
  )
})

export default HomeFirstSection
