import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class FriendForm extends React.Component {
    render() {
        return (
            <Form className='friend-form' onSubmit={this.props.handleAddFriend}>
                <h2>New Friend Form:</h2>
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input type='text' name='name' placeholder='name' />
                </FormGroup>
                <FormGroup>
                    <Label for='age'>Age</Label>
                    <Input type='text' name='age' placeholder='age' />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input type='email' name='email' placeholder='email' />
                </FormGroup>
                <Button color='primary'>Submit</Button>
            </Form>
        );
    }
}