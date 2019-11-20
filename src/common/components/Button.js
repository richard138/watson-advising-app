import React from 'react';
import {Form, Button as ButtonComponent} from 'semantic-ui-react';

export const Button =(props) =>{
    const{label} = props;

    return (
        <Form.Field>
            <ButtonComponent
            label={label}
            />
        </Form.Field>
    )
    

}