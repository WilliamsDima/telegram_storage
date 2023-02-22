import React, { memo, FC } from 'react'
import PhotoCollage from '../../molecules/PhotoCollage'
import styles from './style.module.scss'
import cn from 'classnames'

const cats = [
  '/images/animals/cat1.jpg',
  '/images/animals/cat2.jpg',
  '/images/animals/dog1.jpg',
  '/images/animals/cat4.jpg',
  '/images/animals/cat5.jpg',
  '/images/animals/dog3.jpg',
  '/images/animals/cat7.jpg',
  '/images/animals/cat8.jpg',
  '/images/animals/dog4.jpg',
]

const gogs = [
  '/images/animals/cat3.jpg',
  '/images/animals/cat6.jpg',
  '/images/animals/dog5.jpg',
  '/images/animals/cat9.jpg',
  '/images/animals/dog6.jpg',
  '/images/animals/cat10.jpg',
  '/images/animals/dog7.jpg',
  '/images/animals/cat11.jpg',
  '/images/animals/dog8.jpeg',
]

type Collages = {
  visible: boolean
}

const PhotoCollages: FC<Collages> = memo(({ visible }) => {
  return (
    <div
      className={cn(styles.collages, {
        [styles.visible]: visible,
      })}
    >
      <PhotoCollage images={cats} visible={visible} />
      <div className={styles.collage}>
        <PhotoCollage images={gogs} visible={visible} />
      </div>
    </div>
  )
})

export default PhotoCollages
