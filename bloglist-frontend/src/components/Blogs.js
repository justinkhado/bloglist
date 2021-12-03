import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/Favorite'

const Blogs = () => {
  const blogs = useSelector((state) => {
    return state.blogs
  })

  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)

  return (
    <div>
      {sortedBlogs.map(blog =>
        <Card
          sx={{ margin: 2 }}
          variant='elevation'
          elevation={5}
          key={blog.id}
        >
          <CardActionArea
            component={Link}
            to={`/blogs/${blog.id}`}
          >
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginRight: 16
                }}
              >
                <Typography sx={{ alignSelf: 'center' }} variant='body2'>
                  {blog.likes}
                </Typography>
                <FavoriteBorderIcon />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 100
                }}
              >
                <Typography variant='h6'>
                  {blog.title}
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <Typography variant='body2' color='text.secondary'>
                    {blog.comments.length} comment(s)
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    submitted by {blog.user.username}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  )
}

export default Blogs