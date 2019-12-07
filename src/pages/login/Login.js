import React, { Component, Fragment }  from 'react'
import { connect } from 'react-redux';
import {submit} from 'redux-form'
import { withRouter } from 'react-router-dom';

import {LoginForm} from "./components/LoginForm"
// import {LOGIN_FORM_NAME} from '../../common/FormEnum'
import {PostLogin, EstablishSession} from './state/actions'
import '../../styles/Login.css'
import UNCW from '../../images/UNCW.png'
import MortonHall from '../../images/FisherUnion.jpg'


class LoginContainer extends Component{

    constuctor() {
        this.routeChange = this.routeChange.bind(this);
      }

    routeChange() {
        let path = '/watsonchat';
        this.props.history.push(path);
      }

    async componentDidMount(){
        await this.props.EstablishSession()
    }

    SubmitForm = () =>{
        // this.props.submit(LOGIN_FORM_NAME)
        this.routeChange() 
    }

    handleSubmit = (formValues) =>{
        console.log(formValues)
    }

    render(){
        return(
            <Fragment className={"login-component"}>
            <img src={UNCW} className={"uncw-logo"}/>
            <img src={MortonHall} alt={"Morton"} className={"bg"}/>
            <div className={"header-position"}>
                <h1 className={"header-style"}>Online Academic Adviser</h1>
            </div>
                <LoginForm 
                SubmitForm={this.SubmitForm}
                onSubmit={this.handleSubmit} 
                />
            <footer className={"footer-style"}>
                <p>Dev Build {new Date().toDateString()} </p>
                <p>Richard Chambers;Hunt Blanchat;Tony Singer</p>
            </footer>  
            </Fragment> 
             )
    }
}

const mapDispatchToProps = {submit, PostLogin, EstablishSession}

const mapStateToProps = (state) => {
    return {
        loading: state.login.login.loading,
        token: state.login.login.password,
        loginSuccessful: state.login.login.loginSuccessful
    };
};

 export const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));