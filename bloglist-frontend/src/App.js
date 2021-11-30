import React, { useState, useEffect } from 'react'
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
    dispatch(initializeBlogs())
    dispatch(loggedInUser())
  }, [dispatch])

  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  const test = false

  if (test) {
    setMessage()
    setIsError()
  }

  const user = useSelector((state) => {
    return state.user
  })

  if (!user) {
    return (
      <div>
        <Notification message={message} isError={isError} />

        <h2>log in</h2>
        <LoginForm />
      </div>
    )
  }

  return (
    <div>
      <Notification message={message} isError={isError} />

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