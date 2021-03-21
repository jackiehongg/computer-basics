import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../store';

import Header from './layout/Header';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

import Lessons from './lessons/Lessons';
import Tabs from './lessons/Tabs';
import Printing from './lessons/Printing';
import Account from './lessons/Account';
import Uploading from './lessons/Uploading';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className='App'>
                        <Header />
                        <Route exact path="/" component={Lessons} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/tabs" component={Tabs} />
                        <Route exact path="/printing" component={Printing} />
                        <Route exact path="/account" component={Account} />
                        <Route exact path="/uploading" component={Uploading} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));