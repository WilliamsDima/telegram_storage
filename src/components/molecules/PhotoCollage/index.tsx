import React, { memo, FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'

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
            <div style={{ backgroundImage: `url(${item.src})` }}></div>
          </div>
        )
      })}
    </div>
  )
})

export default PhotoCollage
