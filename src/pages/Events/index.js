import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from '../../services/history'

export default class Events extends Component {
  render() {
      return(
      <div>
        <Button variant="btn btn-success" onClick={() => history.push('/')}>Click button to go to events</Button>
      </div>
      ); 
  }
}
