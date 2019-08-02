import { without } from "lodash"
import Parse from "../../api/Parse"

const actions = {
    SIGNUP: "signup",
    SIGNUP_SUCCESS: "signup/success",
    SIGNUP_FAILURE: "signup/failure",
    LOGIN: "login",
    LOGIN_SUCCESS: "login/success",
    LOGIN_FAILURE: "login/failure",
    LOGOUT: "logout",
    LOGOUT_SUCCESS: "logout/success",
    LOGOUT_FAILURE: "logout/failure",
}

export const signUp = ({ email, password }) => (dispatch) =>
    Promise.resolve()
        .then(() => {
            dispatch({ type: actions.SIGNUP })
        })
        .then(() =>
            new Parse.User()
                .set("username", email)
                .set("password", password)
                .signUp()
        )
        .then((data) => {
            dispatch({ type: actions.SIGNUP_SUCCESS, payload: data })
        })
        .catch((error) => {
            dispatch({ type: actions.SIGNUP_FAILURE, payload: error })
        })

export const login = ({ email, password }) => (dispatch) =>
    Promise.resolve()
        .then(() => {
            dispatch({ type: actions.LOGIN })
        })
        .then(() => Parse.User.logIn(email, password))
        .then((user) => {
            dispatch({ type: actions.LOGIN_SUCCESS, payload: user })
        })
        .catch((error) => {
            dispatch({ type: actions.LOGIN_FAILURE, payload: error })
        })

export const logout = () => (dispatch) =>
    Promise.resolve()
        .then(() => {
            dispatch({ type: actions.LOGOUT })
        })
        .then(() => Parse.User.logOut())
        .then(() => {
            dispatch({ type: actions.LOGOUT_SUCCESS })
        })
        .catch((error) => {
            dispatch({ type: actions.LOGOUT_FAILURE, payload: error })
        })

export default (state = { isAuthenticated: false }, { type, payload }) => {
    switch (type) {
    case actions.LOGIN_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            user: payload,
        }
    case actions.LOGOUT_SUCCESS:
        return {
            ...without(state, "user"),
            isAuthenticated: false,
        }
    default:
        return { ...state }
    }
}
