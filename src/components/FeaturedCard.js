import React, { Component } from 'react';
import icnAddToCart from '../assets/images/icn-add-to-cart.svg';
import icnView from '../assets/images/icn-view.svg';
import variables from '../assets/variables';

export default class FeaturedClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            hoverViewButton: false,
            hoverAddButton: false
        }

        this.toggleHover = this.toggleHover.bind(this);
        this.toggleHoverViewButton = this.toggleHoverViewButton.bind(this);
        this.toggleHoverAddButton = this.toggleHoverAddButton.bind(this)
    }
    
    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    toggleHoverViewButton() {
        this.setState({hoverViewButton: !this.state.hoverViewButton})
    }

    toggleHoverAddButton() {
        this.setState({hoverAddButton: !this.state.hoverAddButton})
    }

    render() {
        return(
            <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={styles().cardWrapper}>
                <div style={styles(this.state.hover).card}>
                    <img style={styles().featuredImg} src={this.props.imgSrc}/>
                    <div style={styles(this.state.hover).cartButtonWrapper}>
                        <div onMouseEnter={this.toggleHoverViewButton} onMouseLeave={this.toggleHoverViewButton} style={styles(this.state.hoverViewButton).icnContainerLeft}>
                            <img style={styles().cartIcn} src={icnView}/>
                        </div>
                        <div onMouseEnter={this.toggleHoverAddButton} onMouseLeave={this.toggleHoverAddButton} style={styles(this.state.hoverAddButton).icnContainerRight}>
                            <img style={styles().cartIcn} src={icnAddToCart}/>
                        </div>
                    </div>
                    <div style={styles(this.state.hover).textWrapper}>
                        <p style={styles().product}>Genius Metal</p>
                        <p style={styles().price}>₱10,000</p>
                    </div>
                </div>
            </div>
        );
    }

}

let styles = (hovered) => ({
    cardWrapper: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
    },
    card: {
        width: 240,
        height: 350,
        backgroundColor: variables.white2,
        display: 'flex',
        borderRadius: 4,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 30
        
    }, 
    featuredImg: {
        height: 150,
        width: 'auto',
        marginTop: 45,
        alignSelf: 'center',
    },
    textWrapper: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        padding: 10,
        border: 'solid 2px ' + variables.white2,
    },
    product: {
        fontSize: 14,
        margin: 0,
        color: variables.gray4
    },
    price: {
        fontSize: 15,
        fontWeight: 1000,
        margin: 0,
        color: variables.gray5
    },
    cartButtonWrapper: {
        display: hovered ? 'flex' : 'none',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: variables.white1,
        height: 40,
        margin: 30,
        marginBottom: 0,
        borderRadius: 4,
        cursor: 'pointer'
    },
    cartButtonText: {
        fontSize: 14,
        alignSelf: 'center',
        color: variables.gray4,
        fontWeight: 1000,
    }, 
    icnContainerLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        opacity: hovered ? 1 : 0.5,
        width: '50%'
    },
    icnContainerRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        opacity: hovered ? 1 : 0.5,
        width: '50%'
    },
    cartIcn: {
        width: 22,
        height: 22,
        alignSelf: 'center'
    }
})