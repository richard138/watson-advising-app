import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/ConfigureStore';
// import {Login} from './pages/login/Login';
import {WatsonChat} from './pages/watsonchat/WatsonChat';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <WatsonChat />
    </Provider>,
document.getElementById('root'));

