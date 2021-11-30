import blogService from '../services/blogs'

const blogReducer = (state=[], action) => {
  switch(action.type) {
  case 'NEW_BLOG':
    return [...state, action.data]
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    
  }
}

export const createBlog = (blog) => {
  return async dispatch => {
    const newBlog = await blogService.createBlog(blog)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })
  }
}

export default blogReducer