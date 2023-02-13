import React, { FC } from "react"
import styles from './style.module.scss'

type Page = {
  
}

const ErrorTemplate: FC<Page> = ({}) => {
  return (
    <div className={styles.container}>
      <div>
        404 page
      </div>
    </div>
  )
}

export default ErrorTemplate