import React, { Component } from 'react'

export class Add extends Component {
  render() {
    const {todoList} = this.props
    // console.log('todoList',todoList)
    return (
      <div>
        {
          todoList.map((list,i) => {
            return (<li key={i}>{list.value}</li>)
          })
        }
      </div>
    )
  }
}

export default Add
