import React from 'react';
import {Form,Button, Grid} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form'


import {LoginFieldEnum as fields} from '../../../common/FieldEnum'
import {LOGIN_FORM_NAME} from '../../../common/FormEnum'
import {Input} from '../../../common/components/Input'

class LoginFormContainer extends React.Component {

  render() {
    return ( 
      
    <Form name={LOGIN_FORM_NAME} style={{
      position: 'absolute', left: '49%', top: '74%',
      transform: 'translate(-50%, -50%)'
      }}>
      <Grid>
        {/* <Grid.Row>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={10}>
            <Field
            style={{fontSize: "1.5em"}}
            name={fields.UserId}
            label={'UserName: '}
            component={Input}
            type="text"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={10}>
              <Field
              style={{fontSize: "1.5em"}}
              name={fields.Password}
              label={'Password:'}
              component={Input}
              password={true}
              />
          </Grid.Column>
        </Grid.Row> */}
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
