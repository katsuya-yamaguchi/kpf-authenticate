import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import { fetchLoginStatus } from '../actions/auth'
import styles from './UserOnly.module.scss'
import TitleBar from './TitleBar'

const UserOnly: React.FC = props => {
  const dispatch = useDispatch()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(fetchLoginStatus(false))
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
