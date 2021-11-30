const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialBlogs)
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('id named id', async () => {
  const response = await api.get('/api/blogs')
  response.body.forEach(blog => expect(blog.id).toBeDefined())
})

test('a valid blog can be added', async () => {
  const newBlog = {
    title: 'title',
    author: 'Arthur Author',
    url: 'http://localhost:5000/example.html',
    likes: 27
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
  expect(blogsAtEnd.map(({ id, ...blog }) => blog)).toContainEqual(newBlog)
})

test('missing likes defaults 0', async () => {
  const newBlog = {
    title: 'title',
    author: 'Arthur Author',
    url: 'http://localhost:1/a.html'
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
  
  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd.map(({ id, ...blog }) => blog))
    .toContainEqual({ ...newBlog, likes: 0 })
})

test('missing title or url', async () => {
  let newBlog = {
    author: 'Arthur Author',
    url: 'http://localhost:1/a.html'
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

  newBlog = {
    title: 'title',
    author: 'Arthur Author'    
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)
})

test('deletion of a blog', async () => {
  const blogsAtStart = await helper.blogsInDb()
  const blogToDelete = blogsAtStart[0]

  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .expect(204)
  
  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1)
  
  const titles = blogsAtEnd.map(blog => blog.title)
  expect(titles).not.toContain(blogToDelete.title)
})

afterAll(() => {
  mongoose.connection.close()
})