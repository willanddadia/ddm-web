/** @jsx jsx */
import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'
import leftArrow from '../assets/images/left-arrow.svg'
import rightArrow from '../assets/images/right-arrow.svg'
import variables from '../assets/variables';

export default class Arrow extends Component {

  render() {
    return(
      <div onClick={this.props.handleClick} style={styles(this.props.direction).arrow}
        css={css`
        transition: transform ease-in 0.1s;
        &:hover {
          transform: scale(1.1);
          opacity: 1.0;
        }`}>
        <img src={this.props.direction === 'right' ? rightArrow : leftArrow}
          css={css`
            transform: translateX(${this.props.direction === 'left' ? '-2' : '2'}px);
            &:focus {
              outline: 0;
            }`}/>
      </div>
    )
  }
}

let styles = (direction) => ({
  arrow: {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    right: direction === 'right' ? 10 : null,
    left: direction === 'left' ? 10 : null,
    opacity: 0.7,
    height: 50,
    width: 50,
    justifyContent: 'center',
    background: variables.gray1,
    borderRadius: '50%',
    cursor: 'pointer',
    alignItems: 'center',
  }
})