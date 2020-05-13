/** @jsx jsx */
import React, { Component } from 'react';
import logoText from '../assets/images/logo-text.png';
import { css, jsx } from '@emotion/core';
import variables from '../assets/variables';

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }

        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {
        return(
            <div style={styles.wrapper}>
                <img style={styles.logo} src={logoText}></img>
                <div style={styles.listWrapper}>
                    <ul style={styles.listWrapper}>
                        <li style={styles.item}
                            css={css` 
                            &:hover {
                                color: #3376E2 !important;
                              }`}>Products</li>
                        <li style={styles.item}
                            css={css` 
                            &:hover {
                                color: #3376E2 !important;
                              }`}>Events</li>
                        <li style={styles.item}
                            css={css` 
                            &:hover {
                                color: #3376E2 !important;
                              }`}>Catalogue</li>
                        <li style={styles.item}
                            css={css` 
                            &:hover {
                                color: #3376E2 !important;
                              }`}>About</li>
                    </ul>
                </div>
            </div>
        );
    }
}

let styles = {
    wrapper: {
        display: 'flex',
        padding: 25,
        paddingTop: 50,
        justifyContent: 'space-between',
    },
    logo: {
        width: 200,
        height: 40,
        alignSelf: 'center',
    },
    listWrapper: {
        width: 'auto',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
    },
    item: {
        fontSize: 16,
        paddingLeft: 7,
        paddingRight: 7,
        color: variables.gray5,
        cursor: 'pointer'
    }
}