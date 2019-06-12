import React from 'react';

export default class Friend extends React.Component {
    render() {
        return(
            <div className='friend-info'>
                <h2>{this.props.friend.name}</h2>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
            </div>
        )
    }
}