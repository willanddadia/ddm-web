/** @jsx jsx */
import React, { Component } from 'react'
import { jsx } from '@emotion/core'
import variables from '../assets/variables';

export default class Dots extends Component {
  
  render() {
    let slides = this.props.slides
    let dots
    
    dots = slides.map((slide, i) => {
      return(<span key={slide} style={styles(this.props.activeSlide === i).dot} />);
    })

    return(
      <div style = {styles(null).dots} >
       {dots}
      </div>
    );
  }

}

let styles = (active) => ({
  dot: {
    padding: 5,
    marginRight: 5,
    cursor: 'pointer',
    borderRadius: '50%',
    opacity: 0.7,
    background: active ? variables.gray2 : variables.gray1
  },
  dots: {
    position: 'absolute',
    bottom: 25,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})