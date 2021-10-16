import React, { Component } from 'react'
// eslint-disable-next-line
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return <div onClick={() => this.props.handleColorChange(getRandomColor())}
      className="child" 
      style={{ backgroundColor: this.props.color }}>
    </div>;
  }
}

export default Child
