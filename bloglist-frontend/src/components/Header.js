import React from 'react'
import { Typography } from '@mui/material'

const Header = () => {
  return (
    <Typography
      sx={{
        display: 'flex',
        justifyContent: 'center',
        background: 'lavender',
        padding: 1
      }}
      variant='h3'
    >
      bloglist
    </Typography>
  )
}

export default Header