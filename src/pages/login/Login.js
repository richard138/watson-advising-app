import React, { Component, Fragment }  from 'react'
import { connect } from 'react-redux';
import {submit} from 'redux-form'

import {LoginForm} from "./components/LoginForm"
import {LOGIN_FORM_NAME} from '../../common/FormEnum'
import { EstablishSession, PostLogin} from './state/actions'
import '../../styles/Login.css'


class LoginContainer extends Component{

    async componentDidMount(){
        const {EstablishSession} = this.props
        await EstablishSession()
    }

    SubmitForm = () =>{
        console.log(this.props.token)
        this.props.submit(LOGIN_FORM_NAME) 
    }

    handleSubmit = (formValues) =>{
        // console.log(formValues)
        this.props.PostLogin(formValues, this.props.token)
    }

    render(){
        return(
            <Fragment>
            <div className={"header-position"}>
                <h1 className={"header-style"}>UNCW Online Adviser</h1>
            </div>
                <LoginForm 
                SubmitForm={this.SubmitForm}
                onSubmit={this.handleSubmit} 
                />  
            </Fragment> 
             )
    }
}

const mapDispatchToProps = {submit, EstablishSession, PostLogin}

const mapStateToProps = (state) => {
    return {
        loading: state.login.login.loading,
        loginSuccessful: state.login.login.loginSuccessful,
        token: state.login.login.token

    };
};

 export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);