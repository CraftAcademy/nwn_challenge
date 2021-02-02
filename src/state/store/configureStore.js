import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'

const configureStore = () => {
  return createStore(rootReducer, { newsFeed: [] })
}

export default configureStore