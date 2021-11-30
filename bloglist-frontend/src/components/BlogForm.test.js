import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'

test('Submitting a BlogForm', () => {
  const createBlog = jest.fn()

  const component = render(
    <BlogForm createBlog={createBlog} />
  )

  const form = component.container.querySelector('form')
  const titleInput = component.container.querySelector('#titleInput')
  const authorInput = component.container.querySelector('#authorInput')
  const urlInput = component.container.querySelector('#urlInput')

  fireEvent.change(titleInput, {
    target: { value: 'Blog title' }
  })
  fireEvent.change(authorInput, {
    target: { value: 'Au Thor' }
  })
  fireEvent.change(urlInput, {
    target: { value: 'url.com' }
  })
  fireEvent.submit(form)

  expect(createBlog.mock.calls).toHaveLength(1)
  expect(createBlog.mock.calls[0][0].title).toBe('Blog title')
  expect(createBlog.mock.calls[0][0].author).toBe('Au Thor')
  expect(createBlog.mock.calls[0][0].url).toBe('url.com')
})