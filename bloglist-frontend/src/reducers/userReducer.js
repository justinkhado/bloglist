import blogService from '../services/blogs'

const userReducer = (state=null, action) => {
  switch(action.type) {
  case 'LOGGED_USER':
    return action.data
  case 'SET_USER':
    return action.data
  default:
    return state
  }
}

export const loggedInUser = () => {
  return async dispatch => {
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

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    data: user
  }
}

export default userReducer