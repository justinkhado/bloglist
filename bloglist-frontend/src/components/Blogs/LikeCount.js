import React from 'react'
import { useDispatch } from 'react-redux'
import { like } from '../../reducers/blogReducer'
import {
  IconButton,
  Typography
} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/Favorite'

const LikeCount = ({ blog }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginTop: 15
  }

  const dispatch = useDispatch()

  const handleLike = () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 }
    dispatch(like(updatedBlog))
  }

  return (
    <div style={style}>
      <Typography sx={{ alignSelf: 'center' }} variant='body'>
        {blog.likes}
      </Typography>
      <IconButton
        sx={{ paddingTop: 0 }}
        color='inherit'
        onClick={() => handleLike()}
      >
        <FavoriteBorderIcon />
      </IconButton>
    </div>
  )
}

export default LikeCount