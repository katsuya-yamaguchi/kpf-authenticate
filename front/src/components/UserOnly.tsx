import React from 'react'
import Button from '@material-ui/core/Button'
import styles from './UserOnly.module.scss'
import TitleBar from './TitleBar'
import { AuthActionType } from '../constants/auth'

export interface propType {
  fetchLoginStatus: (state: Boolean) => AuthActionType
}

const UserOnly: React.FC<propType> = props => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.fetchLoginStatus(false)
  }

  return (
    <div>
      <TitleBar title='UserOnly' />
      <div className={styles.title}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          LogOut
        </Button>
      </div>
    </div>
  )
}

export default UserOnly
