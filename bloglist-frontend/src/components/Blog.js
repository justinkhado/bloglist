import React, { useState } from 'react'

const Blog = ({ blog, handleLike, handleDelete, user }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [visible, setVisible] = useState(false)
  const [viewText, setViewText] = useState('view')

  const toggleDetails = () => {
    setVisible(!visible)

    if (visible) {
      setViewText('view')
    }
    else {
      setViewText('hide')
    }
  }

  return (
    <div style={blogStyle} className='blog'>
      <i>{blog.title} </i>
      <span>{blog.author}</span> <br />
      <button onClick={toggleDetails}>{viewText}</button>
      {visible &&
        <div>
          <span>{blog.url}</span> <br />
          <span>{`likes: ${blog.likes} `}</span>
          <button id='like-button' onClick={() => handleLike(blog.id)}>like</button>  <br />
          {blog.user.name} <br />
          {user.username === blog.user.username &&
            <button onClick={() => handleDelete(blog)}>remove</button>
          }
        </div>
      }

    </div>
  )
}

export default Blog