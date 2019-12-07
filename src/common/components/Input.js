import React from 'react';
import {Form, Input as InputComponent} from 'semantic-ui-react';

export const Input =({label, input, password=false}) =>{
    return (
        <Form.Field>
            <InputComponent
            style={{border: '1px solid black'}}
            input={input}
            label={label}
            type={password ? "password" : "text"}
            />
        </Form.Field>
    )
    

}