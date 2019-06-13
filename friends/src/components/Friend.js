import React from 'react';
import { Button } from 'reactstrap';

export default class Friend extends React.Component {
    render() {
        return(
            <div className='friend-info'>
                <h2>{this.props.friend.name}</h2>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
                <div className='friend-options'>
                    <Button color='info'>Edit</Button>{' '}
                    <Button color='danger'>Delete</Button>
                </div>
            </div>
        )
    }
}