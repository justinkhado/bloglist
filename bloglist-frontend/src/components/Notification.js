import React from 'react'

const Notification = ({ message, isError }) => {
  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderSyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if (!message) {
    return null
  }

  if (isError) {
    notificationStyle.color = 'red'
  }

  return (
    <div id='notification' style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification