import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import LikeCount from './LikeCount'
import { remove, addComment } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { logOut } from '../reducers/userReducer'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link as MuiLink,
  Typography
} from '@mui/material'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const [comment, setComment] = useState('')

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
    <div>
      <Card
        sx={{
          display: 'flex',
          margin: 2
        }}
        elevation={5}
      >
        <CardActions>
          <LikeCount blog={blog} />
        </CardActions>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 0,
            flexGrow: 1
          }}
        >
          <Typography variant='h6'>
            {blog.title}
          </Typography>
          <MuiLink href={blog.url}>
            <Typography sx={{ overflowWrap: 'anywhere' }}>
              {blog.url}
            </Typography>
          </MuiLink>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: 16
            }}
          >
            <Typography variant='body2' color='text.secondary'>
              {'submitted by '}
              <MuiLink component={Link} to={`/users/${blog.user.id}`}>
                {blog.user.username}
              </MuiLink>
            </Typography>
            {user.username === blog.user.username &&
              <Button
                variant='contained'
                color='error'
                size='small'
                onClick={() => handleDelete(blog)}
              >
                delete
              </Button>
            }
          </div>
        </CardContent>
      </Card>
      <Card
        sx={{ margin: 2 }}
        variant='elevation'
        elevation={5}
      >
        <CardContent>
          <h3 style={{ marginBottom: 5 }}>comments</h3>
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <button onClick={handleComment}>submit</button>
          {blog.comments.map((comment, index) =>
            <li key={index}>{comment}</li>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Blog