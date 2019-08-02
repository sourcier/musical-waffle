import { combineReducers } from "redux"
import blog from "./blog"
import session from "./session"

export default combineReducers({
    blog,
    session,
})
