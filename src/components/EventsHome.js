import React, { Component } from "react";
import Slider from './Slider';
import images from '../images'
import variables from '../assets/variables';

export default class EventsHome extends Component {

    render() {
        // console.log(variables.white);
        return(
            <div style={styles.wrapper}>
                <Slider slides={images} autoPlay={0} />
            </div>
        );
    }
    
}

let styles = {
    wrapper: {
        display: 'flex',
        padding: '25px 200px',
        justifyContent: 'center',
        backgroundColor: variables.white2,
        
    }
}