import blogService from '../services/blogs'
import usersService from '../services/users'

const blogReducer = (state=[], action) => {
  switch(action.type) {
  case 'INIT_BLOGS':
    return action.data
  case 'NEW_BLOG':
    return [...state, action.data]
  case 'LIKE':
    return state.map(blog =>
      blog.id !== action.data.id ? blog : action.data
    )
  case 'DELETE':
    return state.filter(blog => blog.id !== action.data.id)
  case 'COMMENT':
    return state.map(blog =>
      blog.id !== action.data.id ? blog : {
        ...blog, comments: blog.comments.concat(action.data.commentObject)
      }
    )
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = (blog, user) => {
  return async dispatch => {
    const returnedBlog = await blogService.create(blog)
    const newBlog = {
      ...returnedBlog,
      user: {
        username: user.username,
        name: user.name,
        id: returnedBlog.user
      }
    }
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })
  }
}

export const like = (blog, user) => {
  return async dispatch => {
    await blogService.update(blog.id, blog)
    await usersService.update(user.id, user)
    dispatch({
      type: 'LIKE',
      data: blog
    })
  }
}

export const remove = (blog) => {
  return async dispatch => {
    await blogService.remove(blog.id)
    dispatch({
      type: 'DELETE',
      data: blog
    })
  }
}

export const addComment = (id, commentObject) => {
  return async dispatch => {
    await blogService.comment(id, commentObject)
    dispatch({
      type: 'COMMENT',
      data: { id, commentObject }
    })
  }
}

export default blogReducer