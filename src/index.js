import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import configureStore from './store/ConfigureStore';
import {Login} from './pages/login/Login';
import {WatsonChat} from './pages/watsonchat/WatsonChat';

const store = configureStore()

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/watsonchat" component={WatsonChat}/>

            </Switch>
        </Provider>
    </Router>,
document.getElementById('root'));

