import { combineReducers } from 'redux'
import blog from './blog'
import nav from './nav'
import mail from './mail'

export default combineReducers({
  blog,
  nav,
  mail,
})
