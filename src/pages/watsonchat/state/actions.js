import * as types from './types'
// Description: This dispatches an asynchronous action which inovkes the watson Assitant class' message() function.
// The message() function sends a JSON object (the "response" object in the action below). The response objects contains
// an input property who's value is set to what the user has inputed.
// NOTE:
// In react-redux when an action is dispatched, the reducer is fired. The reducer updates the page level state. The reducer for this
// page is located in watsonChat/state/reducer.js

export const SendMessage = (input, service) =>{
  return async (dispatch) =>{
    const response = await service.message({
      workspaceId: 'f96277d8-c515-4dcc-ab18-442ed4cd62d6',
      input: {'text': input}
      })
      dispatch({type: types.SET_WATSON_RESPONSE, payload: response.result.output.text[0]})
  }
  
 
}