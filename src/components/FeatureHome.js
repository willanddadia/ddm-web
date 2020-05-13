import React, { Component } from 'react';
import featuredImages from '../featuredImages';
import FeaturedCard from './FeaturedCard';
import variables from '../assets/variables';

export default class FeatureHome extends Component {
    
    render() {
        return(
            <div style={styles.wrapper}>
                <div style={styles.navigationWrapper}>
                    <p style={{...styles.navigationText, ...styles.active}}>New</p>
                    <p style={styles.navigationText}>Featured</p>
                </div>
                <div>
                    <div style={styles.cardListWrapper}>
                        {featuredImages.map((featured, i) => (
                            <FeaturedCard key={i} imgSrc={featured}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

let styles = {
    wrapper: {
        height: 'auto',
        display: 'flex',
        padding: '25px 200px',
        flexDirection: 'column',
        backgroundColor: variables.white1,
        minWidth: 1000
    },
    navigationWrapper: {
        display: 'flex',
        margin: '0 auto',
    },
    navigationText: {
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 5,
        fontSize: 16,
        height: 16,
        color: variables.gray5,
        cursor: 'pointer',
    },
    active: {
        borderBottom: 'solid 2px',
        color: variables.blue1,
        fontWeight: 1000
    },
    cardListWrapper: {
        display: 'flex',
        flexFlow: 'row wrap'
    }
}