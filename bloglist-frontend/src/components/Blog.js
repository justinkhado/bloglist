import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { like, remove, addComment } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { logOut } from '../reducers/userReducer'

import {
  Card,
  CardContent
} from '@mui/material'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const [comment, setComment] = useState('')


  const handleLike = () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 }
    dispatch(like(updatedBlog))
  }

  const handleDelete = async () => {
    if (window.confirm(`Remove blog "${blog.title}" by ${blog.author}`)) {
      try {
        await dispatch(remove(blog))
        navigate('/')
      } catch (error) {
        dispatch(setNotification({
          message: 'Token expired - log in again',
          error: true
        }))
        dispatch(logOut())
      }
    }
  }

  const handleComment = async () => {
    try {
      await dispatch(addComment(blog.id, comment))
      setComment('')
    } catch (error) {
      dispatch(setNotification({
        message: 'Token expired - log in again',
        error: true
      }))
      dispatch(logOut())
    }
  }

  if (!blog) {
    return null
  }

  return (
    <Card
      sx={{ margin: 2 }}
      variant='elevation'
      elevation={5}
    >
      <CardContent>
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
        <div>
          <h3 style={{ marginBottom: 5 }}>comments</h3>
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <button onClick={handleComment}>submit</button>
          {blog.comments.map((comment, index) =>
            <li key={index}>{comment}</li>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default Blog