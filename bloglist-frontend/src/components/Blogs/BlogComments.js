import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addComment } from '../../reducers/blogReducer'
import { setNotification } from '../../reducers/notificationReducer'
import { logOut } from '../../reducers/currentUserReducer'
import {
  Button,
  Card,
  CardContent,
  Link as MuiLink,
  Stack,
  TextField,
  Typography
} from '@mui/material'

const BlogComments = ({ blog }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  const [comment, setComment] = useState('')

  const handleComment = async () => {
    // check if comment null, empty, or white-space only
    if (
      comment === null ||
      comment.match(/^ *$/) !== null ||
      (comment.indexOf('\n') !== -1 && comment.length === 1)
    ) {
      dispatch(setNotification({
        message: 'comment can\'t be empty',
        error: true
      }))
      setComment('')
      return
    }

    try {
      const commentObject = {
        comment,
        username: currentUser.username,
        userId: currentUser.id
      }
      await dispatch(addComment(blog.id, commentObject))
      setComment('')
    } catch (error) {
      dispatch(setNotification({
        message: 'Token expired - log in again',
        error: true
      }))
      dispatch(logOut())
    }
  }

  return (
    <Card
      sx={{ margin: 2 }}
      variant='elevation'
      elevation={5}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <TextField
          value={comment}
          rows={3}
          onChange={(event) => setComment(event.target.value)}
          multiline
        />
        <Button
          sx={{ mt: 1 }}
          variant='contained'
          size='small'
          onClick={handleComment}
        >
          submit
        </Button>
        <Stack
          mt={3}
          spacing={1}
        >
          {blog.comments.map((commentObject, index) =>
            <Card
              sx={{
                border: 1,
                padding: 1
              }}
              variant='outlined'
              key={index}
              square
            >
              <Typography>
                {commentObject.comment}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {'- '}
                <MuiLink
                  sx={{ textDecoration: 'none' }}
                  component={Link}
                  to={`/users/${blog.user.id}`}
                >
                  {blog.user.username}
                </MuiLink>
              </Typography>
            </Card>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default BlogComments