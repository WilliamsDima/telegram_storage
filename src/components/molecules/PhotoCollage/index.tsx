import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import Image from 'next/image'

type Collage = {
  images: any[]
  visible: boolean
}

const PhotoCollage: FC<Collage> = memo(({ images, visible }) => {
  return (
    <div
      className={cn(styles.collage, {
        [styles.visible]: visible,
      })}
    >
      {images.map((item, i) => {
        return (
          <div className={styles.item} key={i}>
            <Image
              src={item}
              alt="cloud"
              className={styles.img}
              width={300}
              height={300}
            />
          </div>
        )
      })}
    </div>
  )
})

export default PhotoCollage
