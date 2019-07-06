import React from 'react';
import './App.css';
import Buttom from './components/Button'
import Process from './components/Process'
class App extends React.Component{
  state = {
    process: 0.5,
    disableDrag: true
  }
  handelOnDragStart = () => {
    console.log('start')
  }
  handelOnDrag = (process) => {
    let errorValue = 15 / window.screen.width 
    if (process < 0){
      process = 0
    }
    if (process + errorValue >= 1) {
      process = 1 - errorValue
    }
    // console.log('process',process)
    this.setState({
      process: process
    })
  }
  handelOnDragEnd = () => {
    console.log('end')
  }
  render() {
    const { process, disableDrag } = this.state
    return (
      <div className="App">
        <Buttom></Buttom>
        <Process process={process} disableDrag={disableDrag} 
        onDragStart={this.handelOnDragStart}
        onDrag={this.handelOnDrag}
        onDragEnd={this.handelOnDragEnd}
        ></Process>
      </div>
    );
  }
}
// Progress.propTypes = {
//   //进度
//   progress: 必须 number,
//   //是否禁用拖拽
//   disableDrag: bool,
//   onDragStart: func,
//   onDrag: func, 告诉父级 现在的进度
//   onDragEnd: func 已经拖完了
// };
// onTouchStart
// onTouchMove
// onTouchEnd
export default App;
