import { createStore } from 'redux'
import { rootReducer } from './reducer'
export const state = createStore(rootReducer)