import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('render title and author only', () => {
  const blog = {
    title: 'Blog title',
    author: 'Au Thor',
    url: 'url.com',
    likes: 0
  }

  const component = render(
    <Blog blog={blog} />
  )

  const title = component.getByText('Blog title')
  const author = component.getByText('Au Thor')
  const url = component.queryByText('url.com')
  const likes = component.queryByText('likes: 0')

  expect(title).toBeDefined()
  expect(author).toBeDefined()
  expect(url).not.toBeInTheDocument()
  expect(likes).not.toBeInTheDocument()
})

test('render url and likes after button is clicked', () => {
  const blog = {
    title: 'Blog title',
    author: 'Au Thor',
    url: 'url.com',
    likes: 0,
    user: {
      name: 'Test Subject',
      username: 'username'
    }
  }
  const user = {
    username: 'username'
  }

  const component = render(
    <Blog blog={blog} user={user} />
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  const title = component.getByText('Blog title')
  const author = component.getByText('Au Thor')
  const url = component.getByText('url.com')
  const likes = component.getByText('likes: 0')

  expect(title).toBeDefined()
  expect(author).toBeDefined()
  expect(url).toBeDefined()
  expect(likes).toBeDefined()
})

test('clicking like button twice', () => {
  const blog = {
    title: 'Blog title',
    author: 'Au Thor',
    url: 'url.com',
    likes: 0,
    user: {
      name: 'Test Subject',
      username: 'username'
    }
  }
  const user = {
    username: 'username'
  }
  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} user={user} handleLike={mockHandler} />
  )

  const viewButton = component.getByText('view')
  fireEvent.click(viewButton)

  const likeButton = component.getByText('like')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)

  expect(mockHandler.mock.calls).toHaveLength(2)
})