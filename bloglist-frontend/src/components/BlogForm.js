import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Togglable from './Togglable'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { logOut } from '../reducers/userReducer'

const BlogForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const blogFormRef = useRef()

  const addBlog = async (event) => {
    event.preventDefault()

    blogFormRef.current.toggleVisibility()

    const blog = {
      title: title,
      author: author,
      url: url
    }

    try {
      await dispatch(createBlog(blog, user))
      setTitle('')
      setAuthor('')
      setUrl('')

      dispatch(setNotification({
        message: `a new blog "${blog.title}" by ${blog.author} added`
      }))
    } catch (error) {
      dispatch(setNotification({
        message: 'Token expired - log in again',
        error: true
      }))
      dispatch(logOut())
    }
  }

  return (
    <Togglable buttonLabel='create new blog' ref={blogFormRef}>
      <div>
        <h2>create new</h2>
        <form onSubmit={addBlog}>
          <div>
            title:
            <input
              id='title-input'
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>
          <div>
            author:
            <input
              id='author-input'
              value={author}
              onChange={event => setAuthor(event.target.value)}
            />
          </div>
          <div>
            url:
            <input
              id='url-input'
              value={url}
              onChange={event => setUrl(event.target.value)}
            />
          </div>
          <button id='submit-blog-form' type='submit'>
            create
          </button>
        </form>
      </div>
    </Togglable>
  )
}

export default BlogForm