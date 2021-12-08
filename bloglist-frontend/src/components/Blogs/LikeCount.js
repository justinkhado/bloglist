import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { like } from '../../reducers/blogReducer'
import { updateLikedBlogs } from '../../reducers/currentUserReducer'
import {
  IconButton,
  Typography
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const LikeCount = ({ blog }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginTop: 15
  }

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleLike = () => {
    const updatedBlog = user.likedBlogs.includes(blog.id)
      ? { ...blog, likes: blog.likes - 1 }
      : { ...blog, likes: blog.likes + 1 }

    const updatedUser = user.likedBlogs.includes(blog.id)
      ? {
        ...user,
        likedBlogs: user.likedBlogs.filter(
          id => id !== blog.id
        ) }
      : { ...user, likedBlogs: user.likedBlogs.concat(blog.id) }

    console.log(updatedUser)
    console.log(updatedUser.likedBlogs)

    dispatch(like(updatedBlog, updatedUser))
    dispatch(updateLikedBlogs(updatedUser.likedBlogs))
  }

  return (
    <div style={style}>
      <Typography sx={{ alignSelf: 'center' }} variant='body'>
        {blog.likes}
      </Typography>
      <IconButton
        sx={{ paddingTop: 0 }}
        color='primary'
        onClick={() => handleLike()}
      >
        {user.likedBlogs.includes(blog.id)
          ? <FavoriteIcon />
          : <FavoriteBorderIcon />
        }
      </IconButton>
    </div>
  )
}

export default LikeCount