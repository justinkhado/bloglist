import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import EditBlogForm from './EditBlogForm'
import BlogComments from './BlogComments'
import LikeCount from './LikeCount'
import { remove } from '../../reducers/blogReducer'
import { logOut } from '../../reducers/currentUserReducer'
import { setNotification } from '../../reducers/notificationReducer'
import { removeFromUserBlogs } from '../../reducers/usersReducer'
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
  const user = useSelector(state => state.currentUser)
  const [toggleEdit, setToggleEdit] = useState(false)

  const handleDelete = async () => {
    if (window.confirm(`Remove blog "${blog.title}" by ${blog.author}`)) {
      try {
        await dispatch(remove(blog))
        dispatch(removeFromUserBlogs(blog, user))
        navigate('/')
        dispatch(setNotification({
          message: 'blog successfully deleted'
        }))
      } catch (error) {
        dispatch(setNotification({
          message: 'Token expired - log in again',
          error: true
        }))
        dispatch(logOut())
      }
    }
  }

  if (!blog) {
    navigate('/')
    dispatch(setNotification({
      message: 'page no longer exists',
      error: true
    }))
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
          {toggleEdit ?
            <EditBlogForm blog={blog} setToggleEdit={setToggleEdit} /> :
            <div>
              {blog.type === 'link' ?
                <MuiLink
                  href={
                    blog.url.indexOf('http') !== -1 ? blog.url : `//${blog.url}`
                  }
                >
                  <Typography sx={{ overflowWrap: 'anywhere' }}>
                    {blog.url}
                  </Typography>
                </MuiLink> :
                <Card variant='outlined' square>
                  <Typography m={1}>{blog.text}</Typography>
                </Card>
              }
            </div>
          }
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: 16
            }}
          >
            <Typography variant='body2' color='text.secondary'>
              {`submitted on ${new Date(blog.date).toLocaleDateString()} by `}
              <MuiLink
                sx={{ textDecoration: 'none' }}
                component={Link}
                to={`/users/${blog.user.id}`}
              >
                {blog.user.username}
              </MuiLink>
            </Typography>
            {user.username === blog.user.username &&
              <div>
                {!toggleEdit ?
                  <Button
                    sx={{ mr: 1 }}
                    variant='contained'
                    color='success'
                    size='small'
                    onClick={() => setToggleEdit(true)}
                  >
                    edit
                  </Button> :
                  <Button
                    sx={{ mr: 1 }}
                    size='small'
                    onClick={() => setToggleEdit(false)}
                  >
                    cancel
                  </Button>
                }
                <Button
                  variant='contained'
                  color='error'
                  size='small'
                  onClick={() => handleDelete()}
                >
                  delete
                </Button>
              </div>
            }
          </div>
        </CardContent>
      </Card>
      <BlogComments blog={blog} />
    </div>
  )
}

export default Blog