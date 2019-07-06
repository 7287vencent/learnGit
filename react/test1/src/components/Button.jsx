import React, { Component } from 'react'
import './Button.css'
import axios from 'axios'
axios.defaults.baseURL = '/api';
export class Button extends Component {
  componentDidMount() {
    axios.post('/openh5/homepage/kingkong',{
      '_': 156239696825,
      'X-FOR-WITH':'sFs972jVMYykMHBX31T48iEdKMnCibyBTUj793T+DyR4y54WX27gqmmtD6eWH4DNyf6EnDsHogchibQXtLQtJEvkgIGA8/dbB5JYHv1Q9a9al/bUmq8saCNbBMe0Om/l7kIwwHG7M7Kx6RewdkAGaA=='}).then(res => {
        console.log(res)
      })
  }
  render() {
    return (
      <div>
        <button>确定</button>
      </div>
    )
  }
}

export default Button
