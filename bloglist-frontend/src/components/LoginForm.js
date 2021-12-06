import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/userReducer'
import { register } from '../reducers/usersReducer'
import { setNotification } from '../reducers/notificationReducer'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link as MuiLink,
  TextField,
  Typography
} from '@mui/material'

const LoginForm = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [registering, setRegistering] = useState(false)

  const handleIsRegistering = () => {
    setRegistering(!registering)
  }

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

  const handleRegister = async (event) => {
    event.preventDefault()

    try {
      await dispatch(register({ username, password }))
      await dispatch(setUser(username, password))
    }
    catch (exception) {
      if (username.length < 6) {
        dispatch(setNotification({
          message: 'username must be at least 5 characters',
          error: true
        }))
      }
      else if (password.length < 9) {
        dispatch(setNotification({
          message: 'password must be at least 8 characters',
          error: true
        }))
      }
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
              mt: 1,
              display: 'flex',
              flexDirection: 'column'
            }}
            component='form'
            onSubmit={
              registering ? handleRegister : handleLogin
            }
          >
            <Typography
              sx={{
                alignSelf: 'center',
                mb: 1
              }}
              variant='h4'
            >
              {registering ? 'register' : 'log in'}
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
              {registering ? 'register' : 'log in'}
            </Button>
            <MuiLink
              sx={{
                mt: 2,
                alignSelf: 'flex-end'
              }}
              component={Button}
              onClick={handleIsRegistering}
            >
              {registering
                ? 'Have an account? Log in'
                : 'Not signed up? Register'
              }
            </MuiLink>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default LoginForm