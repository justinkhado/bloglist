import userService from '../services/users'

const usersReducer = (state=[], action) => {
  switch (action.type) {
  case 'INIT_USERS':
    return action.data
  case 'REGISTER':
    return [...state, action.data]
  case 'ADD_USER_BLOG':
    return state.map(user =>
      user.id !== action.data.id ? user : { ...user, blogs: user.blogs.concat(action.data.blog) }
    )
  case 'REMOVE_USER_BLOG':
    return state.map(user =>
      user.id !== action.data.userId
        ? user
        : { ...user, blogs: user.blogs.filter(b => b.id !== action.data.blogId) }
    )
  case 'LIKE_USER_BLOG':
    return state.map(user =>
      user.id !== action.data.userId
        ? user
        : {
          ...user,
          blogs: user.blogs.map(b =>
            b.id !== action.data.blog.id ? b : action.data.blog
          )
        }
    )
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

export const register = (username, password) => {
  return async dispatch => {
    const user = await userService.register({ username, password })
    dispatch({
      type: 'REGISTER',
      data: user
    })
  }
}

export const addToUserBlogs = (blog, user) => {
  return dispatch => {
    dispatch({
      type: 'ADD_USER_BLOG',
      data: { id: user.id, blog }
    })
  }
}

export const removeFromUserBlogs = (blog, user) => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_USER_BLOG',
      data: { userId: user.id, blogId: blog.id }
    })
  }
}

export const updateUserLikedBlogs = (blog, user) => {
  return dispatch => {
    dispatch({
      type: 'LIKE_USER_BLOG',
      data: { userId: user.id, blog }
    })
  }
}

export default usersReducer