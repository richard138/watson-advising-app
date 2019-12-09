import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import configureStore from './store/ConfigureStore';
import {Login} from './pages/login/Login';
import {WatsonChat} from './pages/watsonchat/WatsonChat';

const store = configureStore()

//Description:
//This is the main file of the react project. This is where the virtual DOM is intansiated and it's render
//method is called. In react web-applications there is techinically only one page on the website.
//Different components are rendered on this page to give the appearence of different pages (react-router-dom)
// Author: Richard Chambers


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

