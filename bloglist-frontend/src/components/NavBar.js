import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../reducers/userReducer'
import { AppBar, Button, Menu, MenuItem, Toolbar } from '@mui/material'

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      sx={{ background: 'grey' }}
      position='static'
    >
      <Toolbar
        sx={{
          display: 'flex'
        }}
        variant='dense'
      >
        <Button color='inherit' component={Link} to='/'>
          blogs
        </Button>
        <Button color='inherit' component={Link} to='/users'>
          users
        </Button>
        <Button color='inherit' component={Link} to='/blogs/submit'>
          submit
        </Button>
        <Button
          sx={{ marginLeft: 'auto' }}
          color='inherit'
          aria-controls='user-menu'
          onClick={handleClick}
        >
          {currentUser.username}
        </Button>
        <Menu
          id='user-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            component={Link}
            to={`/users/${currentUser.id}`}
            onClick={handleClose}
          >
            my blogs
          </MenuItem>
          <MenuItem
            color='inherit'
            onClick={() => dispatch(logOut())}
            component={Link}
            to='/'
          >
            log out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar