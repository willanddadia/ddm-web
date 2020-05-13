/** @jsx jsx */
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'

export default class Slide extends Component {
  
  render() {
    return(
      <div style={styles(this.props.content, this.props.width).slide}></div>
    );
  }
  
}

let styles = (content, width) => ({
  slide: {
    height: '100%',
    width: width,
    backgroundImage: 'url(' + content + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
})
