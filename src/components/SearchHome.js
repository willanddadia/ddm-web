import React, { Component } from "react";
import logoIcon from '../assets/images/logo-shadow.png';
import variables from '../assets/variables';

export default class SearchHome extends Component {

    render() {
        return(
            <div style={styles.wrapper}>
                <div style={styles.logoWrapper}>
                    <img style={styles.logo} src={logoIcon}/>
                </div>
                <div style={styles.searchWrapper}>
                    <p style={styles.searchHeader}>Browse through our products.</p>
                    <div style={styles.searchBar}>
                        <input style={styles.searchInput}/>
                        <div style={styles.searchButton}>
                            <p style={styles.searchButtonText}>Go</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

let styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        padding: 25,
        paddingBottom: 100,
    },
    logoWrapper: {
        display: 'flex',
        justifyContent: 'center',
        height: 'auto',
        margin: '0 auto',
    },
    logo: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        shadowColor: variables.black1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3, 
    },
    searchWrapper: {
        height: 'auto',
        justifyContent: 'center',
        margin: '0 auto',
        marginTop: 30,
    },
    searchHeader: {
        fontSize: 38,
        fontWeight: 'bold',
        color: variables.gray5,
        margin: 0,
    },
    searchBar: {
        width: 600,
        margin: '0 auto',
        marginTop: 30,
        display: 'flex',
    },
    searchInput: {
        width: 500,
        padding: 15,
        height: 25,
        fontSize: 20,
        backgroundColor: variables.white2,
        color: variables.gray5,
        fontWeight: 500,
        outline: 'none',
        borderWidth: 1,
        borderColor: variables.gray5,
        borderStyle: 'solid',
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        borderRightWidth: 0,
    },
    searchButton: {
        width: 100,
        height: 57,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        backgroundColor: variables.blue1,
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer'
    }, 
    searchButtonText: {
        color: variables.white2,
        fontSize: 20,
        lineHeight: '20px',
        fontWeight: 1000,
        alignSelf: 'center'
    }
}