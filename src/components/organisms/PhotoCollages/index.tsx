import React, { memo, FC } from 'react'
import PhotoCollage from '../../molecules/PhotoCollage'
import styles from './style.module.scss'
import cn from 'classnames'

import cat1 from '../../../assets/images/animals/cat1.jpg'
import cat2 from '../../../assets/images/animals/cat2.jpg'
import cat3 from '../../../assets/images/animals/cat3.jpg'
import cat4 from '../../../assets/images/animals/cat4.jpg'
import cat5 from '../../../assets/images/animals/cat5.jpg'
import cat6 from '../../../assets/images/animals/cat6.jpg'
import cat7 from '../../../assets/images/animals/cat7.jpg'
import cat8 from '../../../assets/images/animals/cat8.jpg'
import cat9 from '../../../assets/images/animals/cat9.jpg'
import cat10 from '../../../assets/images/animals/cat10.jpg'
import cat11 from '../../../assets/images/animals/cat11.jpg'

import dog1 from '../../../assets/images/animals/dog1.jpg'
import dog3 from '../../../assets/images/animals/dog3.jpg'
import dog4 from '../../../assets/images/animals/dog4.jpg'
import dog5 from '../../../assets/images/animals/dog5.jpg'
import dog6 from '../../../assets/images/animals/dog6.jpg'
import dog7 from '../../../assets/images/animals/dog7.jpg'
import dog8 from '../../../assets/images/animals/dog8.jpeg'

const cats = [cat1, cat2, dog1, cat4, cat5, dog3, cat7, cat8, dog4]

const gogs = [cat3, cat6, dog5, cat9, dog6, cat10, dog7, cat11, dog8]

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
