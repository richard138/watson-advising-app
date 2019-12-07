import * as types from './types'


export const SendMessage = (input, service) =>{
  return async (dispatch) =>{
    const response = await service.message({
      workspaceId: 'f96277d8-c515-4dcc-ab18-442ed4cd62d6',
      input: {'text': input}
      })
      dispatch({type: types.SET_WATSON_RESPONSE, payload: response.result.output.text[0]})
  }
  
 
}