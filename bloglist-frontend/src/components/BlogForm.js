import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { logOut } from '../reducers/userReducer'

import {
  Card,
  CardContent,
  Container,
  Button,
  TextField,
  Typography
} from '@mui/material'

const BlogForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleCreateBlog = async (event) => {
    event.preventDefault()

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

      navigate('/')
    } catch (error) {
      dispatch(setNotification({
        message: 'Token expired - log in again',
        error: true
      }))
      dispatch(logOut())
    }
  }

  return (
    <Container
      sx={{
        mt: 5,
        ml: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
      }}
      maxWidth='md'
    >
      <Card
        sx={{ margin: 2 }}
        variant='elevation'
        elevation={5}
      >
        <CardContent>
          <Typography variant='h5'>share new blog</Typography>
          <form onSubmit={handleCreateBlog}>
            <div>
              <TextField
                id='title-input'
                label='title'
                value={title}
                onChange={event => setTitle(event.target.value)}
                margin='dense'
                size='small'
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id='url-input'
                label='url'
                value={url}
                onChange={event => setUrl(event.target.value)}
                margin='dense'
                size='small'
                fullWidth
                required
              />
            </div>
            <div>
              <TextField
                id='author-input'
                label='author'
                value={author}
                onChange={event => setAuthor(event.target.value)}
                margin='dense'
                size='small'
                required
              />
            </div>
            <Button
              sx={{ mt: 2 }}
              id='submit-blog-form'
              type='submit'
              variant='contained'
            >
              create
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}

export default BlogForm