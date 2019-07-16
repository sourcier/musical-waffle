import { combineReducers } from "redux"
import blogReducer from "./blogReducer"
import sessionReducer from "./sessionReducer"

export default combineReducers({
    blog: blogReducer,
    session: sessionReducer,
})
