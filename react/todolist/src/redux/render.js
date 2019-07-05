import { combineReducers } from 'redux'
let State = {
  todoList: []
}

function getChange(state = State.todoList, action) {
  console.log(action.todoList)
  switch(action.type) {                                                          
    case 'ADD':
      // return [
      //   {
      //     id: action.todoList.id,
      //     value: action.todoList.value
      //   },
      //   ...state
      // ]
      return [
        ...action.todoList
      ]
      // return action.todoList
    default:
      return state
  }
}
export default combineReducers({
  getChange
})