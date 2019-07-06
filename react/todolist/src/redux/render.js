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
      // return [
      //   ...action.todoList
      // ]
      // 每次返回的数据必须是新的数据，原来的数据不行,可以使用浅拷贝把数据变成一个新的数据
      return action.todoList.slice(0)
    default:
      return state
  }
}
export default combineReducers({
  getChange
})