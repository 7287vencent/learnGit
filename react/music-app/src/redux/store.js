import { createStore } from 'redux'
import reducer  from './reducers'
const store = createStore(reducer)
// console.log('store', store.song)
export default store