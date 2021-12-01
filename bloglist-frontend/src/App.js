import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'

import { initializeBlogs } from './reducers/blogReducer'
import { loggedInUser, logOut } from './reducers/userReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loggedInUser())
    dispatch(initializeBlogs())
  }, [dispatch])

  const user = useSelector((state) => {
    return state.user
  })

  if (!user) {
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
          {`${user.name} logged in `}
          <button onClick={() => dispatch(logOut())}>log out</button>
        </p>
        <BlogForm />
        <Blogs />
      </div>
    </div>
  )
}

export default App