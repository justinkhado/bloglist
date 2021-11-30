import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()

    createBlog({
      title: title,
      author: author,
      url: url
    })

    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
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
  )
}

export default BlogForm