import React from 'react'
import {
  MenuItem,
  Select
} from '@mui/material'

const SortBy = ({ sort, handleSortChange }) => {
  return (
    <Select
      sx={{
        background: 'white',
        alignSelf: 'flex-end',
        margin: 1,
        marginRight: 3,
        paddingLeft: 1
      }}
      variant='standard'
      value={sort}
      onChange={handleSortChange}
    >
      <MenuItem value={'date'}>date</MenuItem>
      <MenuItem value={'likes'}>likes</MenuItem>
    </Select>
  )
}

export default SortBy