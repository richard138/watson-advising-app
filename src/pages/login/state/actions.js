import * as types from './types'
import axios from 'axios'
import fetch from 'isomorphic-fetch'
import SeleniumServer from `selenium-webdriver`


export const PostLogin = (credentials, token) =>{
    return async (dispatch) =>{
        try{
            //Right now this will ALWAYS return a 200. Need to check somewhere else for my some specific creds
            const cors_help = 'https://cors-anywhere.herokuapp.com/';
            const auth_token = ''; // Generate this live, bad practice to leave in git
            const url = 'https://canvas.instructure.com/api/v1/courses?access_token='+auth_token;
            const base_url = 'https://canvas.instructure.com/api/v1/courses';
            const response = await fetch(cors_help+url);
            console.log(response.status)
            //  return {type: types.SET_LOGIN_SUCCESSFUL, payload:true}
        }
        catch(exception){
            throw(exception)
        }

    }
};

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