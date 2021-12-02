import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Routes,
  Route,
  useMatch
} from 'react-router-dom'

import Blog from './components/Blog'
import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
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
  const blogs = useSelector(state => state.blogs)

  const userMatch = useMatch('/users/:id')
  const user = userMatch
    ? users.find(u => u.id === userMatch.params.id)
    : null

  const blogMatch = useMatch('/blogs/:id')
  const blog = blogMatch
    ? blogs.find(b => b.id === blogMatch.params.id)
    : null

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
          <Route path='/blogs/:id' element={<Blog blog={blog} />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User user={user} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App