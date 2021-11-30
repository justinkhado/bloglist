import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

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

  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(false)

  const user = useSelector((state) => {
    return state.user
  })

  console.log(user)

  const blogFormRef = useRef()

  const addBlog = async (blogObject) => {
    blogFormRef.current.toggleVisibility()

    const returnedBlog = await blogService.create(blogObject)
    const newBlog = { ...returnedBlog,
      user: {
        id: returnedBlog.user,
        name: user.name,
        username: user.username
      }
    }
    setBlogs(blogs.concat(newBlog))

    setMessage(`a new blog "${blogObject.title}" by ${blogObject.author} added`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const blogForm = () => (
    <Togglable buttonLabel='create new blog' ref={blogFormRef}>
      <BlogForm createBlog={addBlog} />
    </Togglable>
  )

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

  const handleLike = async (id) => {
    const blogToUpdate = blogs.find(blog => blog.id === id)
    const updatedBlog = { ...blogToUpdate, likes: blogToUpdate.likes + 1 }

    await blogService.update(id, updatedBlog)
    setBlogs(blogs.map(blog => blog.id !== id ? blog : updatedBlog))
  }

  const handleDelete = async (blog) => {
    if (window.confirm(`Remove blog "${blog.title}" by ${blog.author}`)) {
      await blogService.remove(blog.id)
      setBlogs(blogs.filter(b => b.id !== blog.id))
    }
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
        {blogForm()}
        <Blogs
          handleLike={handleLike}
          handleDelete={handleDelete}
          user={user}
        />
      </div>
    </div>
  )
}

export default App