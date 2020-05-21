const actions = {
  TOGGLE_NAV: 'nav/toggle',
  CLOSE_NAV: 'nav/close'
}

export const toggleNav = () => (dispatch) =>
  dispatch({ type: actions.TOGGLE_NAV })

export const closeNav = () => (dispatch) =>
  dispatch({ type: actions.CLOSE_NAV })

const initialState = {
  isOpen: false
}

export default (state = initialState, { type }) => {
  switch (type) {
    case actions.TOGGLE_NAV:
      return { isOpen: !state.isOpen }
    case actions.CLOSE_NAV:
      return { isOpen: false }
    default:
      return { ...state }
  }
}
