import React from 'react'
import {
  Card,
  CardContent,
  Table,
  TableContainer,
  Typography
} from '@mui/material'

const UserBlogs = ({ user }) => {
  if (!user) {
    return null
  }

  return (
    <Card
      sx={{
        margin: 2
      }}
    >
      <CardContent>
        <Typography variant='h5'>
          {user.username}
        </Typography>
        <TableContainer>
          <Table></Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default UserBlogs