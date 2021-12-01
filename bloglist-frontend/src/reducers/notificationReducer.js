const notificationReducer = (state=null, action) => {
  switch(action.type){
  case 'SET_NOTIFICATION':
    return action.data
  case 'REMOVE_NOTIFICATION':
    return null
  default:
    return state
  }
}

let timeoutId

export const setNotification = (notification, time=5000) => {
  return async dispatch => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    dispatch({
      type: 'SET_NOTIFICATION',
      data: notification
    })
    timeoutId = await setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION'
      })
    }, time)
  }
}

export default notificationReducer