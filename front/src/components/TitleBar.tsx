import React from 'react'
import styles from './TitleBar.module.scss'

interface propType {
  title: String
}

const TitleBar: React.FC<propType> = props => {
  return (
    <div className={styles.title}>
      <h1>{ props.title }</h1>
    </div>
  )
}

export default TitleBar
