import Parse from "../../api/Parse"

const actions = {
    SIGNUP: "signup",
    SIGNUP_SUCCESS: "signup/success",
    SIGNUP_FAILURE: "signup/failure",
}

export const signUp = ({ email, password }) => (dispatch) =>
    Promise.resolve()
        .then(() => dispatch({ type: actions.SIGNUP }))
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

export default (state = { isAuthenticated: false }) => ({ ...state })
