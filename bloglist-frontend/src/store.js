import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import blogReducer from './reducers/blogReducer'
import currentUserReducer from './reducers/currentUserReducer'
import usersReducer from './reducers/usersReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  blogs: blogReducer,
  currentUser: currentUserReducer,
  users: usersReducer,
  notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
