import React, { FC, CSSProperties, memo, ReactNode } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import Image from 'next/image'

type TSectionText = {
  img?: string
  title: string
  text?: string
  children?: ReactNode
  visible: boolean
  titleStyle?: CSSProperties
  textStyle?: CSSProperties
}

const SectionText: FC<TSectionText> = memo(
  ({ img, title, text, children, visible, titleStyle, textStyle }) => {
    return (
      <div
        className={cn(styles.sectionText, {
          [styles.visible]: visible,
        })}
      >
        <h2 style={titleStyle}>{title}</h2>
        {text && <p style={textStyle}>{text}</p>}

        <div className={styles.img}>
          {img ? (
            <Image src={img} alt={title} width={128} height={128} />
          ) : (
            children
          )}
        </div>
      </div>
    )
  }
)

export default SectionText
