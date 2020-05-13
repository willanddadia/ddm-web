import React, { Component } from 'react';
import Header from '../../components/Header';
import SearchHome from '../../components/SearchHome';
import FeatureHome from '../../components/FeatureHome';
import EventsHome from '../../components/EventsHome';
import variables from '../../assets/variables';

export default class Home extends Component {
  render() {
    return(
      <div style={styles.page}>
        <style> @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Work+Sans:wght@300&display=swap'); </style>
        <Header/>
        <SearchHome/>
        <FeatureHome/>
        <EventsHome/>
      </div>
    );
  }
}

let styles = {
  page: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: variables.white2,
    height: 'auto',
    width: '100%',
  }
}
