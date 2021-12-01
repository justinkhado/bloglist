import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderSyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  const notification = useSelector(state => state.notification)

  if (!notification) {
    return null
  }

  if (notification.error) {
    notificationStyle.color = 'red'
  }

  return (
    <div id='notification' style={notificationStyle}>
      {notification.message}
    </div>
  )
}

export default Notification