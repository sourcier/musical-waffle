import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

export default (initialState = {}) => {
  const middlewares = [thunk]
  const appliedMiddleware = applyMiddleware(...middlewares)
  const enhancers = [appliedMiddleware]
  const composedEnhancers =
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers)
  const store = createStore(rootReducer, initialState, composedEnhancers)

  return store
}
