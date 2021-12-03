import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from '@mui/material'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  if (!notification) {
    return null
  }

  if (notification.error) {
    return (
      <Alert variant='outlined' severity='error'>
        {notification.message}
      </Alert>
    )
  }

  return (
    <Alert variant='outlined'>
      {notification.message}
    </Alert>
  )
}

export default Notification