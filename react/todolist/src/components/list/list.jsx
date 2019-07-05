import React, { Component } from 'react'
let id = 0
export class list extends Component {
  state = {
    toList: []
  }
  handelsubmit = (e) => {
    // e.preventDefault()
    // if (this.inputNode.value.trim()) {
    //   // 添加
    //   id++
    //   this.props.add({
    //     id,
    //     value: this.inputNode.value.trim()
    //   })
    // }

    let { todoList } = this.props
    todoList.push({
      id: id,
      value: this.inputNode.value.trim()
    })
    this.props.add(todoList)
  }
  render() {
    let { todoList } = this.props
    // console.log('list111',todoList)
    return (
    <div>
      <form onSubmit={this.handelsubmit}>
          <input type="text" ref={node => this.inputNode = node}/>
          <button type="submit">
            addTo
          </button>
        </form>
    </div>
    )
  }
}

export default list
