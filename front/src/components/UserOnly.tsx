import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import { fetchLoginStatus } from '../actions/auth'


const UserOnly: React.FC = props => {
  const dispatch = useDispatch()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(fetchLoginStatus(false))
  }

  return (
    <div>
      <h1>UserOnly</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        LogOut
      </Button>
    </div>
  )
}

export default UserOnly
