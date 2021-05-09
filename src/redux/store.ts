import { createStore, applyMiddleware, Middleware } from 'redux'
import rootReducer from './root-reducer'

const middlewares: Array<Middleware> =  []

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export type State = ReturnType<typeof rootReducer>

export {store};