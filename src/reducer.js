import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './pages/login/reducer';
import watsonChat from './pages/watsonchat/reducer'

export const rootReducer = combineReducers({
    form: formReducer,
    login,
    watsonChat

});

