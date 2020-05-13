import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Route from './Router';
import Home from '../pages/Home';
import Events from '../pages/Events'
export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} isPrivate/>
                <Route path="/events" component={Events} isPrivate/>
                {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
                {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
                <Route component={Home} />
            </Switch>
        );
    }
}