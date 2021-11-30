import blogService from '../services/blogs'

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

export const like = (blog) => {
  return async dispatch => {
    await blogService.update(blog.id, blog)
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

export default blogReducer