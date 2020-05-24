import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Link
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: 'rgba(255,255,255,1)'
    },
    title: {
      flexGrow: 1
    },
    link: {
      fontWeight: 'bold',
      margin: '0 5px'
    }
  })
)

const Header: React.FC = props => {
  const [anchorEl, setAnchorEl] = useState()
  const classes = useStyles()
  const matchDisplayOfPc = useMediaQuery('(min-width: 1024px)')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  let menu
  if (matchDisplayOfPc) {
    menu = (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6">KPF AUTH</Typography>
            <div>
              <Link className={classes.link} color='inherit' href="/">Home</Link>
              <Link className={classes.link} color='inherit' href="/useronly">UserOnly</Link>
              <Link className={classes.link} color='inherit' href="/signin">SignIn</Link>
              <Link className={classes.link} color='inherit' href="/signup">SignUp</Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    ) 
  } else {
    menu = (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6">KPF AUTH</Typography>
            <IconButton
              className={classes.button}
              edge="start"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/useronly">UserOnly</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/signin">SignIn</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/signup">SignUp</Link>
          </MenuItem>
        </Menu>
      </div>
    )
  }

  return (
    <div>
      {menu}
    </div>
  )
}

export default Header
