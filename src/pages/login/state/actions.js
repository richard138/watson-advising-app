import * as types from './types'
import axios from 'axios'

export const PostLogin = (credentials, token) =>{
  const bodyFormData = new FormData();
  // bodyFormData.set("authenticity_token", token);
  // bodyFormData.set("pseudonym_session[unique_id]", credentials.UserId )
  // bodyFormData.set("pseudonym_session[password]", credentials.Password)
  bodyFormData.set("sid", credentials.UserId)
  bodyFormData.set("PIN", credentials.Password)
  return async (dispatch) =>{
    try{
        const response = await axios({
          method: 'post',
          url: 'https://cors-anywhere.herokuapp.com/https://seanet.uncw.edu/TEAL/twbkwbis.P_ValLogin',
          data: bodyFormData,
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