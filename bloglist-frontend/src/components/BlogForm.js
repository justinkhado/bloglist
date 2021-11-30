import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Togglable from './Togglable'
import { createBlog } from '../reducers/blogReducer'

const BlogForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const blogFormRef = useRef()

  const addBlog = (event) => {
    event.preventDefault()

    blogFormRef.current.toggleVisibility()

    const blog = {
      title: title,
      author: author,
      url: url
    }

    dispatch(createBlog(blog, user))

    setTitle('')
    setAuthor('')
    setUrl('')
    /*
    setMessage(`a new blog "${blogObject.title}" by ${blogObject.author} added`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    */
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
          <button id='submit-blog-form' type='submit'>create</button>
        </form>
      </div>
    </Togglable>
  )
}

export default BlogForm