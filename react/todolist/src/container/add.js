import { connect } from 'react-redux'
import Add from '../components/add'
const mapStateToProps = (state) => {
  // console.log('addstate', state)
  return {
    todoList: state.getChange
  }
}

export default connect(mapStateToProps)(Add)