import { createStore } from 'redux'
import reducer from './render'
const store = createStore(reducer)
// console.log('store',store)
export default store