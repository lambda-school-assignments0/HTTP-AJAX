import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import FriendForm from './FriendForm';

export default class Friend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalDelete: false,
            modalUpdate: false,
        }
    }

    toggleModal = (action) => {
        if (action === 'delete') {
            this.setState(prevState => ({
                modalDelete: !prevState.modalDelete,
            }));
        } else if (action === 'update') {
            this.setState(prevState => ({
                modalUpdate: !prevState.modalUpdate,
            }));
        }
    }

    handleDelete = (e) => {
        this.props.deleteFriend(e, this.props.friend);
    }

    handleUpdate = (e) => {
        this.props.updateFriend(e, this.props.friend);
    }

    render() {
        return(
            <div className='friend-info'>
                <h2>{this.props.friend.name}</h2>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
                <div className='friend-options'>
                    <Button color='info' onClick={() => this.toggleModal('update')}>Edit</Button>{' '}
                    <Button color='danger' onClick={() => this.toggleModal('delete')}>Delete</Button>
                    <Modal isOpen={this.state.modalUpdate} toggle={() => this.toggleModal('update')}>
                        <ModalHeader toggle={() => this.toggleModal('update')}>Update Friend</ModalHeader>
                        <ModalBody>
                            <FriendForm />
                        </ModalBody>
                        <ModalFooter>
                            <Button color='primary' onClick={this.handleUpdate}>Update</Button>{' '}
                            <Button color='secondary' onClick={() => this.toggleModal('update')}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modalDelete} toggle={() => this.toggleModal('delete')}>
                        <ModalHeader toggle={() => this.toggleModal('delete')}>Delete Friend</ModalHeader>
                        <ModalBody>
                            {`Are you sure you want to delete ${this.props.friend.name}?`}
                        </ModalBody>
                        <ModalFooter>
                            <Button color='danger' onClick={this.handleDelete}>Delete</Button>{' '}
                            <Button color='secondary' onClick={() => this.toggleModal('delete')}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}