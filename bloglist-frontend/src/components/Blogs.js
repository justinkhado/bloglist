import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'

const Blogs = ({ handleLike, handleDelete, user }) => {
  const blogs = useSelector((state) => {
    return state.blogs
  })

  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)

  return (
    <div>
      {sortedBlogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          handleLike={handleLike}
          handleDelete={handleDelete}
          user={user}
        />
      )}
    </div>
  )
}

export default Blogs