import React, { useState } from 'react'
import LikeCount from './LikeCount'
import SortBy from '../SortBy'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'

const Blogs = () => {
  const [sort, setSort] = useState('date')
  const blogs = useSelector((state) => {
    return state.blogs
  })

  const handleSortChange = (event) => {
    setSort(event.target.value)
  }

  let sortedBlogs
  if (sort === 'date') {
    sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date))
  }
  else{
    sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <SortBy sort={sort} handleSortChange={handleSortChange} />
      {sortedBlogs.map(blog =>
        <Card
          sx={{
            display: 'flex',
            m: 2,
            mb: 0
          }}
          elevation={5}
          key={blog.id}
        >
          <CardActions>
            <LikeCount blog={blog} />
          </CardActions>
          <Link
            style={{
              textDecoration: 'none', flexGrow: 1
            }}
            component={CardActionArea}
            to={`/blogs/${blog.id}`}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: 0
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
                  submitted on {new Date(blog.date).toLocaleDateString()} by {blog.user.username}
                </Typography>
              </div>
            </CardContent>
          </Link>
        </Card>
      )}
    </div>
  )
}

export default Blogs