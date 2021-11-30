import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'

import blogService from './services/blogs'
import loginService from './services/login'

import { initializeBlogs } from './reducers/blogReducer'
import { loggedInUser, setUser } from './reducers/userReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(loggedInUser())
  }, [dispatch])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  const user = useSelector((state) => {
    return state.user
  })

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      dispatch(setUser(user))
    }
    catch (exception) {
      setMessage('wrong username or password')
      setIsError(true)
      setTimeout(() => {
        setMessage(null)
        setIsError(false)
      }, 5000)
    }

    setUsername('')
    setPassword('')
  }

  const handleLogOut = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogAppUser')
  }

  if (!user) {
    return (
      <div>
        <Notification message={message} isError={isError} />

        <h2>log in</h2>
        <LoginForm
          handleLogin={handleLogin}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
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
          <button onClick={() => handleLogOut()}>log out</button>
        </p>
        <BlogForm />
        <Blogs />
      </div>
    </div>
  )
}

export default App