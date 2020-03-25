import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: 'rgba(255,255,255,1)'
    },
    title: {
      flexGrow: 1
    }
  })
)

const Header: React.FC = props => {
  const [anchorEl, setAnchorEl] = useState()
  const classes = useStyles()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.button}
            edge="start"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">KPF AUTH</Typography>
        </Toolbar>
      </AppBar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/useronly">UserOnly</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/signin">SignIn</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/signup">SignUp</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Header
