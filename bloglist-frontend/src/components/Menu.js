import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../reducers/userReducer'

const Menu = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)

  const padding = {
    padding: 5
  }

  return (
    <div style={{ ...padding, background: 'lightgrey' }}>
      <Link style={padding} to='/'>blogs</Link>
      <Link style={padding} to='/users'>users</Link>
      {currentUser &&
        <div style={{ ...padding, display: 'inline' }}>
          {`${currentUser.name} logged in `}
          <button onClick={() => dispatch(logOut())}>log out</button>
        </div>
      }
    </div>
  )
}

export default Menu