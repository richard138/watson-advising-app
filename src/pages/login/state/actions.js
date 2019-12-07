import * as types from './types'
import axios from 'axios'

export const PostLogin = (credentials) =>{
    //some api call here
    return {type: types.SET_LOGIN_SUCCESSFUL, payload:true}
}

export const EstablishSession = () =>{
   return async () =>{
   const response = await axios({
        method: 'get',
        url: 'https://uncw.instructure.com/login/ldap'
      });
    console.log(response)
   }
   

}