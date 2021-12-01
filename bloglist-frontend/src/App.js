import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Routes,
  Route,
  useMatch
} from 'react-router-dom'

import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import User from './components/User'
import Users from './components/Users'

import { initializeBlogs } from './reducers/blogReducer'
import { loggedInUser, logOut } from './reducers/userReducer'
import { initializeUsers } from './reducers/usersReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loggedInUser())
    dispatch(initializeBlogs())
    dispatch(initializeUsers())
  }, [dispatch])

  const currentUser = useSelector(state => state.user)
  const users = useSelector(state => state.users)

  const match = useMatch('/users/:id')
  const user = match
    ? users.find(u => u.id === match.params.id)
    : null

  console.log(users)

  if (!currentUser) {
    return (
      <div>
        <Notification />
        <h2>log in</h2>
        <LoginForm />
      </div>
    )
  }

  return (
    <div>
      <Notification />
      <div>
        <h2>blogs</h2>
        <p>
          {`${currentUser.name} logged in `}
          <button onClick={() => dispatch(logOut())}>log out</button>
        </p>
        <Routes>
          <Route path='/' element={<div><BlogForm /> <Blogs /></div>} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User user={user} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App