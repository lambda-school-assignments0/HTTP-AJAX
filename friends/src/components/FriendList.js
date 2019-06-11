import React from 'react';
import Friend from './Friend';

export default class FriendList extends React.Component {
    render() {
        return (
            <div className='friend-wrapper'>
                {this.props.friends.map(friend => (
                    <Friend friend={friend} />
                ))}
            </div>
        );
    }
}