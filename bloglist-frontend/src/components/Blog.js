import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { like, remove } from '../reducers/blogReducer'

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

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

  const handleLike = () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 }
    dispatch(like(updatedBlog))
  }

  const handleDelete = () => {
    if (window.confirm(`Remove blog "${blog.title}" by ${blog.author}`)) {
      dispatch(remove(blog))
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