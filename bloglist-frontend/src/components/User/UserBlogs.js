import React from 'react'
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

const UserBlogs = ({ user }) => {
  if (!user) {
    return null
  }

  const sortedBlogs = user.blogs.sort((a, b) => b.date - a.date)

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
          {user.username}
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontWeight:'bold' }}>
                  blogs
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight:'bold' }}>
                  likes
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedBlogs.map((blog, index) =>
              <TableRow key={index}>
                <TableCell>
                  <Typography component={Link} to={`/blogs/${blog.id}`}>
                    {blog.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{blog.likes}</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

      </CardContent>
    </Card>
  )
}

export default UserBlogs