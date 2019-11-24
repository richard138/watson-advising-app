import * as types from './types'
import axios from 'axios'
import fetch from 'isomorphic-fetch'
import SeleniumServer from `selenium-webdriver`


export const PostLogin = (credentials, token) =>{
  return async (dispatch) =>{
      try{
          var s = SeleniumServer
        const response = await fetch('https://uncw.instructure.com/login/ldap', {
            method: 'post',
            body: JSON.stringify({
                "pseudonym_session[unique_id]": credentials.UserId,
                "pseudonym_session[password]": credentials.Password,
                "authenticity_token": token,
            }),
            credentials: 'same-origin',
            mode: "no-cors",
            headers: {
                "host": 'uncw.instructure.com',
                "Content-Type": 'application/x-www-form-urlencoded',
                "Origin": 'https://uncw.instructure.com',
                "Referer": 'https://uncw.instructure.com/login/ldap',
            }
        });
        console.log(response)
     //  return {type: types.SET_LOGIN_SUCCESSFUL, payload:true}
     }
     catch(exception){
        throw(exception)
    }
   
  }
}

export const EstablishSession = () =>{
  return async (dispatch) =>{
    try{

        const response = await axios({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://uncw.instructure.com/login/ldap'
          });
        const html = response.data
        const token = html.match(/name="authenticity_token"\svalue="(.*)"/)[1]
        // console.log(response.request.responseText)
        dispatch({type: types.SET_TOKEN, payload:token})
        }
    
    catch(exception){
      throw(exception)
    } 
  }
}