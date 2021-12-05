import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Routes,
  Route,
  useMatch
} from 'react-router-dom'

import Blog from './components/Blogs/Blog'
import BlogForm from './components/Blogs/BlogForm'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import Notification from './components/Notification'
import UserBlogs from './components/UserBlogs'
import Users from './components/Users'

import { initializeBlogs } from './reducers/blogReducer'
import { loggedInUser } from './reducers/userReducer'
import { initializeUsers } from './reducers/usersReducer'

import { Container } from '@mui/material'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loggedInUser())
    dispatch(initializeBlogs())
    dispatch(initializeUsers())
  }, [dispatch])

  const currentUser = useSelector(state => state.user)
  const users = useSelector(state => state.users)
  const blogs = useSelector(state => state.blogs)

  const userMatch = useMatch('/users/:id')
  const user = userMatch
    ? users.find(u => u.id === userMatch.params.id)
    : null

  const blogMatch = useMatch('/blogs/:id')
  const blog = blogMatch
    ? blogs.find(b => b.id === blogMatch.params.id)
    : null

  if (!currentUser) {
    return (
      <Container>
        <Header />
        <Notification />
        <LoginForm />
      </Container>
    )
  }

  return (
    <Container maxWidth='xl'>
      <Header />
      <NavBar />
      <Notification />
      <Routes>
        <Route path='/' element={<div><Blogs /></div>} />
        <Route path='/blogs/:id' element={<Blog blog={blog} />} />
        <Route path='/blogs/submit' element={<BlogForm />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserBlogs user={user} />} />
      </Routes>
    </Container>
  )
}

export default App