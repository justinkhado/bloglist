import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

const LikedBlogs = () => {
  const user = useSelector(state => state.currentUser)
  const blogs = useSelector(state => state.blogs)

  const likedBlogs = blogs.filter(blog =>
    user.likedBlogs.includes(blog.id)
  )

  const sortedBlogs = likedBlogs.sort((a, b) =>
    new Date(a.date) - new Date(b.date)
  )

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography
          sx={{ alignSelf: 'center' }}
          variant='h4'
        >
          liked blogs
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontWeight:'bold' }}>
                  title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight:'bold' }}>
                  user
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedBlogs.map((blog, index) =>
              <TableRow key={index}>
                <TableCell width='100%'>
                  <Typography component={Link} to={`/blogs/${blog.id}`}>
                    {blog.title}
                  </Typography>
                </TableCell>
                <TableCell width='100%'>
                  <Typography component={Link} to={`/users/${blog.user.id}`}>
                    {blog.user.username}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

      </CardContent>
    </Card>
  )
}

export default LikedBlogs