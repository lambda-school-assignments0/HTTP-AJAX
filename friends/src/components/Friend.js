import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Friend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalDelete: false,
            modalUpdate: false,
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({
            modalDelete: !prevState.modalDelete,
        }));
    }

    handleDelete = (e) => {
        this.props.deleteFriend(e, this.props.friend);
    }

    render() {
        return(
            <div className='friend-info'>
                <h2>{this.props.friend.name}</h2>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
                <div className='friend-options'>
                    <Button color='info'>Edit</Button>{' '}
                    <Button color='danger' onClick={this.toggleModal}>Delete</Button>
                    <Modal isOpen={this.state.modalDelete} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Delete Friend</ModalHeader>
                        <ModalBody>
                            {`Are you sure you want to delete ${this.props.friend.name}?`}
                        </ModalBody>
                        <ModalFooter>
                            <Button color='danger' onClick={this.handleDelete}>Delete</Button>{' '}
                            <Button color='secondary' onClick={this.toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}