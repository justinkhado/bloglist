import React from 'react'
import {
  Card,
  Typography
} from '@mui/material'

const Header = () => {
  return (
    <Card
      sx={{
        background: 'mediumpurple'
      }}
      square
    >
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: 1
        }}
        variant='h2'
        color='white'
      >
        bloglist
      </Typography>
    </Card>
  )
}

export default Header