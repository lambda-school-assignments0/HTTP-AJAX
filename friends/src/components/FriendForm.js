import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class FriendForm extends React.Component {
    render() {
        return (
            <Form className='friend-form' onSubmit={this.props.handleAddFriend}>
                <h2>New Friend Form:</h2>
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input type='text' name='inputName' placeholder='name' value={this.props.inputName} onChange={this.props.handleTextChange} />
                </FormGroup>
                <FormGroup>
                    <Label for='age'>Age</Label>
                    <Input type='text' name='inputAge' placeholder='age' value={this.props.inputAge} onChange={this.props.handleTextChange} />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input type='email' name='inputEmail' placeholder='email' value={this.props.inputEmail} onChange={this.props.handleTextChange} />
                </FormGroup>
                <Button color='primary'>Submit</Button>
            </Form>
        );
    }
}