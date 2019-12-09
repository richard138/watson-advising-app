import React, { Component, Fragment }  from 'react'
import { connect } from 'react-redux';
import {submit} from 'redux-form'
import { withRouter } from 'react-router-dom';

import {LoginForm} from "./components/LoginForm"
import {PostLogin, EstablishSession} from './state/actions'
import UNCW from '../../images/UNCW.png'
import FisherUnion from '../../images/FisherUnion.jpg'

import '../../styles/style.css'


class LoginContainer extends Component{

    constuctor() {
        this.routeChange = this.routeChange.bind(this);
      }

    routeChange() {
        //function that calls this.props.history.push which is a react-router-dom function that changes the currently
        //rendered component (changes pages)
        let path = '/watsonchat';
        this.props.history.push(path);
      }

    SubmitForm = () =>{
        this.routeChange() 
    }

    render(){
        //render method is a React.Component method. Returns JSX which is what is rendered on screen.
        return(
            <Fragment className={"login-component"}>
            <img src={UNCW} className={"uncw-logo"} alt={"uncw logo"}/>
            {/* image source: https://commons.wikimedia.org/wiki/File:Uncwlogo.png */}
            <img src={FisherUnion} alt={"FisherUnion"} className={"bg"}/>
            {/* image source: https://www.flickr.com/photos/asalexander/3179747964 */}

            {/* All images used in the project have been labled for at leat non-commercial reuse */}

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