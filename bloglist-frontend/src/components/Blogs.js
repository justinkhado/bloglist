import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const blogLinkStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const blogs = useSelector((state) => {
    return state.blogs
  })

  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes)

  return (
    <div>
      {sortedBlogs.map(blog =>
        <div style={blogLinkStyle} key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link> <br />
        </div>
      )}
    </div>
  )
}

export default Blogs