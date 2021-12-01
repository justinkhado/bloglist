import loginService from '../services/login'
import blogService from '../services/blogs'

const userReducer = (state=null, action) => {
  switch(action.type) {
  case 'LOGGED_USER':
    return action.data
  case 'SET_USER':
    return action.data
  case 'LOG_OUT':
    return null
  default:
    return state
  }
}

export const loggedInUser = () => {
  return dispatch => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      dispatch({
        type: 'LOGGED_USER',
        data: user
      })
    }
  }
}

export const setUser = (username, password) => {
  return async dispatch => {
    const user = await loginService.login({ username, password })
    if (user) {
      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      dispatch({
        type: 'SET_USER',
        data: user
      })
    }
  }
}

export const logOut = () => {
  return dispatch => {
    window.localStorage.removeItem('loggedBlogAppUser')
    dispatch({
      type: 'LOG_OUT'
    })
  }
}

export default userReducer