const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer = (mostLikedBlog, blog) => {
    return blog.likes > mostLikedBlog.likes 
      ? blog
      : mostLikedBlog
  }

  return blogs.reduce(reducer, { likes: 0 })
}

const mostBlogs = (blogs) => {
  const authors = {}
  blogs.forEach(blog => {
    authors[blog.author] 
      ? authors[blog.author] += 1 
      : authors[blog.author] = 1
  })

  const reducer = (mostFrequentAuthor, author) => {
    return authors[author] > authors[mostFrequentAuthor]
      ? author
      : mostFrequentAuthor
  }
  
  author = Object.keys(authors).reduce(reducer)

  return {
    author: author,
    blogs: authors[author]
  }
}

const mostLikes = (blogs) => {
  const authors = {}
  blogs.forEach(blog => {
    authors[blog.author]
      ? authors[blog.author] += blog.likes
      : authors[blog.author] = blog.likes
  })

  const reducer = (mostLikedAuthor, author) => {
    return authors[author] > authors[mostLikedAuthor]
      ? author
      : mostLikedAuthor
  }

  author = Object.keys(authors).reduce(reducer)

  return {
    author: author,
    likes: authors[author]
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}