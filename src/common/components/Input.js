import React from 'react';
import {Form, Input as InputComponent} from 'semantic-ui-react';

export const Input =({label, input, password=false}) =>{
    return (
        <Form.Field>
            <InputComponent
            input={input}
            label={label}
            type={password ? "password" : "text"}
            />
        </Form.Field>
    )
    

}