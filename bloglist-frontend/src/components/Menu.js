import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../reducers/userReducer'
import { AppBar, Box } from '@mui/material'

const Menu = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)

  return (
    <AppBar sx={{ background: 'grey' }} position='static'>
      <Box
        sx={{
          padding: 1,
          display: 'flex'
        }}
      >
        <Link to='/'>blogs</Link>
        <Link to='/users'>users</Link>
        <Link to='/blogs/submit'>submit</Link>
        {currentUser &&
          <div>
            {`${currentUser.name} logged in `}
            <button onClick={() => dispatch(logOut())}>log out</button>
          </div>
        }
      </Box>
    </AppBar>
  )
}

export default Menu