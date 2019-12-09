import React from 'react';
import {Form,Button, Grid} from 'semantic-ui-react';
import {reduxForm} from 'redux-form'

import {LOGIN_FORM_NAME} from '../../../common/FormEnum'

class LoginFormContainer extends React.Component {

  render() {
    return ( 
      
    <Form name={LOGIN_FORM_NAME} style={{
      position: 'absolute', left: '49%', top: '74%',
      transform: 'translate(-50%, -50%)'
      }}>
      <Grid>
        <Grid.Row>
        <Grid.Column width={6}>
          <Button className={"ui-button"} onClick={this.props.SubmitForm} style={{marginLeft: "1em", fontSize: "1.5em", paddingLeft:"6em", paddingRight: "6em"}} >
            Enter
          </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
    )}
}

const validate = () => {
  return {}
}

export const LoginForm = reduxForm({
  form: LOGIN_FORM_NAME,
  destroyOnUnmount: false,
  validate
})(LoginFormContainer)
