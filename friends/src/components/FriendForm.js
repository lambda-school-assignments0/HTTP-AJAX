import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const defaultState = {
    name: '',
    age: '',
    email: '',
}

export default class FriendForm extends React.Component {
    state = {
        friend: defaultState,
    }

    handleTextChange = e => {
        e.persist();
        let value = e.target.value;

        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: value,
            }
        }));
    }

    handleSubmit = e => {
        this.props.addFriend(e, this.state.friend);
        this.setState({
            friend: defaultState,
        });
    }

    render() {
        return (
            <Form className='friend-form' onSubmit={this.handleSubmit}>
                <h2>New Friend Form:</h2>
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input type='text' name='name' placeholder='name' value={this.state.friend.name} onChange={this.handleTextChange} />
                </FormGroup>
                <FormGroup>
                    <Label for='age'>Age</Label>
                    <Input type='text' name='age' placeholder='age' value={this.state.friend.age} onChange={this.handleTextChange} />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input type='text' name='email' placeholder='email' value={this.state.friend.email} onChange={this.handleTextChange} />
                </FormGroup>
                <Button color='primary'>Submit</Button>
            </Form>
        );
    }
}