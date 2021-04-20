import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Projects } from './../pages';
import Menu from './../components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
            </div>
        );
    }
}

export default App;