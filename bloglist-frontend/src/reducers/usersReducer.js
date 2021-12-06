import userService from '../services/users'

const usersReducer = (state=[], action) => {
  switch (action.type) {
  case 'INIT_USERS':
    return action.data
  case 'REGISTER':
    return [...state, action.data]
  default:
    return state
  }
}

export const initializeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'INIT_USERS',
      data: users
    })
  }
}

export const register = (credentials) => {
  return async dispatch => {
    const user = await userService.register(credentials)
    dispatch({
      type: 'REGISTER',
      data: user
    })
  }
}

export default usersReducer