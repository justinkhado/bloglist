import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editText, editUrl } from '../../reducers/blogReducer'
import {
  Box,
  Button,
  TextField
} from '@mui/material'

const EditBlogForm = ({ blog, setToggleEdit }) => {
  const dispatch = useDispatch()
  const [edit, setEdit] = blog.type === 'link'
    ? useState(blog.url)
    : useState(blog.text)

  const handleEdit = async (event) => {
    event.preventDefault()

    if (blog.type === 'link') {
      await dispatch(editUrl(blog.id, edit))
    }
    else {
      await dispatch(editText(blog.id, edit))
    }

    setToggleEdit(false)
  }

  return (
    <Box
      sx={{ p: 1 }}
      component='form'
      onSubmit={handleEdit}
    >
      {blog.type === 'link' ?
        <TextField
          label='url'
          value={edit}
          fullWidth
          onChange={({ target }) => setEdit(target.value)}
        /> :
        <TextField
          label='text'
          value={edit}
          rows={3}
          multiline
          fullWidth
          onChange={({ target }) => setEdit(target.value)}
        />
      }
      <Button
        sx={{ mt: 1 }}
        variant='contained'
        size='small'
        type='submit'
      >
        Save
      </Button>
    </Box>
  )
}

export default EditBlogForm