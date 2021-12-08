import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createBlog } from '../../reducers/blogReducer'
import { setNotification } from '../../reducers/notificationReducer'
import { logOut } from '../../reducers/currentUserReducer'

import {
  Card,
  CardContent,
  Container,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material'

const BlogForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [title, setTitle] = useState('')
  const [type, setType] = useState('link')
  const [url, setUrl] = useState('')
  const [text, setText] = useState('')

  const handleTypeChange = (event, newType) => {
    setType(newType)
  }

  const handleCreateBlog = async (event) => {
    event.preventDefault()

    const blog = type === 'link' ?
      {
        title,
        type,
        url,
        date: new Date()
      } :
      {
        title,
        type,
        text,
        date: new Date()
      }

    try {
      await dispatch(createBlog(blog, user))
      setTitle('')
      setUrl('')

      dispatch(setNotification({
        message: 'blog succesfully created'
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
          <ToggleButtonGroup
            sx={{ m: 1 }}
            size='small'
            value={type}
            onChange={handleTypeChange}
            exclusive
          >
            <ToggleButton value='link'>link</ToggleButton>
            <ToggleButton value='text'>text</ToggleButton>
          </ToggleButtonGroup>
          <form onSubmit={handleCreateBlog}>
            <TextField
              label='title'
              value={title}
              onChange={event => setTitle(event.target.value)}
              margin='dense'
              size='small'
              fullWidth
              required
            />
            {type === 'link' ?
              <TextField
                label='url'
                value={url}
                onChange={event => setUrl(event.target.value)}
                margin='dense'
                size='small'
                fullWidth
                required
              /> :
              <TextField
                label='text'
                value={text}
                onChange={event => setText(event.target.value)}
                margin='dense'
                rows={4}
                multiline
                fullWidth
                required
              />
            }
            <Button
              sx={{ mt: 2 }}
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