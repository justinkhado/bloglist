const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
  const body = request.body

  if (body.password.length < 8) {
    return response.status(400)
      .json({ error: '`password` is shorter than minimum allowed length (8)' })
  }
  
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User ({
    username: body.username,
    passwordHash,
    blogs: [],
    likedBlogs: []
  })

  const savedUser = await user.save()

  response.json(savedUser)
})

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({}).populate('blogs', { title: 1, likes: 1, date: 1 })

  response.json(users)
})

usersRouter.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id)

  response.json(user)
})

usersRouter.put('/:id', async (request, response) => {
  const body = request.body

  const user = {
    likedBlogs: body.likedBlogs
  }

  const updatedUser = await User.findByIdAndUpdate(request.params.id, user, { new: true })
  response.json(updatedUser)
})

module.exports = usersRouter