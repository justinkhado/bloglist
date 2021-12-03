import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography
} from '@mui/material'

const LoginForm = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      await dispatch(setUser(username, password))
    }
    catch (exception) {
      dispatch(setNotification({
        message: 'wrong username or password',
        error: true
      }))
      setUsername('')
      setPassword('')
    }
  }

  return (
    <Container maxWidth='xs'>
      <Card
        sx={{ mt: 10 }}
        variant='elevation'
        elevation={5}
      >
        <CardContent>
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              flexDirection: 'column'
            }}
            component='form'
            onSubmit={handleLogin}
          >
            <Typography sx={{ alignSelf: 'center' }} variant='h4'>
              log in
            </Typography>
            <TextField
              label='username'
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              margin='dense'
              required
              autoFocus
            />
            <TextField
              label='password'
              type='password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              margin='dense'
              required
            />
            <Button
              sx={{ mt: 2 }}
              variant='contained'
              id='login-button'
              type='submit'
              fullWidth
            >
              login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default LoginForm