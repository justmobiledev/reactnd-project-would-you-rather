import { combineReducers } from 'redux'
import authedUserReducer from './authedUserReducer'
import userReducer from './userReducer'
import questionReducer from './questionReducer'

export default combineReducers({
  authedUserReducer,
  userReducer,
  questionReducer,
})