import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { like, remove } from '../reducers/blogReducer'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleLike = () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 }
    dispatch(like(updatedBlog))
  }

  const handleDelete = () => {
    if (window.confirm(`Remove blog "${blog.title}" by ${blog.author}`)) {
      dispatch(remove(blog))
    }
  }

  if (!blog) {
    return null
  }

  return (
    <div>
      <div>
        <h2 style={{ marginBottom: 0 }}>
          {`${blog.title} `}
          {user.username === blog.user.username &&
            <button onClick={() => handleDelete(blog)}>delete</button>
          }
        </h2>
        <i>{`by ${blog.author}`}</i>
      </div> <br />
      <a href={blog.url}>{blog.url}</a> <br />
      <div>
        {`${blog.likes} likes `}
        <button id='like-button' onClick={() => handleLike(blog.id)}>like</button>
      </div>
      uploaded by {blog.user.name}
    </div>
  )

  /*
  return (
    <div className='blog'>
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
  */
}

export default Blog