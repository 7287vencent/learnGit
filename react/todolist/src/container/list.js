import { connect } from 'react-redux'
import List from '../components/list/list'

const mapStateToProps = (state) => {
  return {
    todoList: state.getChange
  }                        
}
const mapDispatchToProps = (dispatch) => {
  return {                       
    add: (todoList) => {
      // console.log('dispatchList',list)
      dispatch({
        type: 'ADD',
        todoList
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)