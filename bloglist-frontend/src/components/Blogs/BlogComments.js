import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../reducers/blogReducer'
import { setNotification } from '../../reducers/notificationReducer'
import { logOut } from '../../reducers/userReducer'
import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography
} from '@mui/material'

const BlogComments = ({ blog }) => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')

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
          {blog.comments.map((comment, index) =>
            <Card
              sx={{ border: 1 }}
              variant='outlined'
              key={index}
              square
            >
              <Typography
                sx={{ padding: 1 }}
              >
                {comment}
              </Typography>
            </Card>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default BlogComments