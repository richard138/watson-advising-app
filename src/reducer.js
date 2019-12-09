import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './pages/login/reducer';
import watsonChat from './pages/watsonchat/reducer'

// Description:
// This is the file that creates the redux store. The store is the global state of project. This function is invoked when 
//the project is started
// Author: Richard Chambers

export const rootReducer = combineReducers({
    form: formReducer,
    login,
    watsonChat

});

