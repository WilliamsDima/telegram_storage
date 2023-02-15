import React, { FC, CSSProperties, memo } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'

type TIconFile = {
  name?: string
  overStyles?: CSSProperties
  file?: string
}

const Icon: FC<{ file: string }> = memo(({ file }) => {
  if (file === 'doc') {
    return (
      <Image
        src="/images/word-icon.png"
        alt="word"
        className={styles.icon}
        width={64}
        height={64}
      />
    )
  }

  if (file === 'xlsx') {
    return (
      <Image
        src="/images/excel-icon.png"
        alt="excel"
        className={styles.icon}
        width={64}
        height={64}
      />
    )
  }

  if (file === 'img') {
    return (
      <Image
        src="/images/img-icon.png"
        alt="img-icon"
        className={styles.icon}
        width={64}
        height={64}
      />
    )
  }

  if (file === 'zip') {
    return (
      <Image
        src="/images/zip-icon.png"
        alt="zip"
        className={styles.icon}
        width={64}
        height={64}
      />
    )
  }

  return <></>
})

const IconFile: FC<TIconFile> = memo(({ name, overStyles, file }) => {
  const fileName = name?.substring(0, 25) + (name?.length > 25 ? '...' : '')
  return (
    <div style={overStyles} className={styles.iconWrapper}>
      <Icon file={file} />
      <p>{fileName}</p>
    </div>
  )
})

export default IconFile
