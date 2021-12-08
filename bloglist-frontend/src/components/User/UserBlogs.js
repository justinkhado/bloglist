import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SortBy from '../SortBy'
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

  const [sort, setSort] = useState('date')

  const blogs = useSelector(state => state.blogs)
  const userBlogs = blogs.filter(blog =>
    blog.user.id === user.id
  )

  const handleSortChange = (event) => {
    setSort(event.target.value)
  }

  let sortedBlogs
  if (sort === 'date') {
    sortedBlogs = userBlogs.sort((a, b) => new Date(b.date) - new Date(a.date))
  }
  else{
    sortedBlogs = userBlogs.sort((a, b) => b.likes - a.likes)
  }

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <SortBy sort={sort} handleSortChange={handleSortChange} />
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
                  title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight:'bold' }}>
                  likes
                </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight:'bold' }}>
                  date
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
                <TableCell>
                  <Typography>{blog.likes}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {(new Date(blog.date)).toLocaleDateString()}
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

export default UserBlogs