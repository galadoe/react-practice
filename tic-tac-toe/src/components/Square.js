import React, { Component } from 'react'

export default class Square extends Component {
  // handledClick =() => {
  //   this.props.click()
  // }

  render(){
    return(
      <>
        <div className = "square" onClick = {this.props.click()}>
          {this.props.value}
        </div>
      </>
    )
  }
}
