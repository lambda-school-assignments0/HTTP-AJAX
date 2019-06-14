import React from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const defaultState = {
    modalDelete: false,
    modalUpdate: false,
    friend: {
        id: '',
        name: '',
        age: '',
        email: '',
    },
}

export default class Friend extends React.Component {
    constructor(props) {
        super(props);

        this.state = defaultState;
    }

    componentDidMount() {
        this.setState({
            friend: {
                id: this.props.friend.id,
                name: this.props.friend.name,
                age: this.props.friend.age,
                email: this.props.friend.email,
            }
        });
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
        this.props.updateFriend(e, this.state.friend);
        this.toggleModal('update');
    }

    handleCancelUpdate = (action) => {
        this.setState({
            friend: {
                id: this.props.friend.id,
                name: this.props.friend.name,
                age: this.props.friend.age,
                email: this.props.friend.email,
            }
        });
        this.toggleModal(action);
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

    render() {
        return(
            <div className='friend-info'>
                <h2>{this.props.friend.name}</h2>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
                <div className='friend-options'>
                    <Button color='info' onClick={() => this.toggleModal('update')}>Edit</Button>{' '}
                    <Button color='danger' onClick={() => this.toggleModal('delete')}>Delete</Button>

                    {/* Modal for Update Friend */}
                    <Modal isOpen={this.state.modalUpdate} toggle={() => this.toggleModal('update')}>
                        <ModalHeader toggle={() => this.toggleModal('update')}>Update Friend</ModalHeader>
                        <ModalBody>
                        <Form className='update-form' onSubmit={this.handleUpdate}>
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
                            <Button color='primary' onClick={this.handleUpdate}>Update</Button>{' '}
                            <Button color='secondary' onClick={() => this.handleCancelUpdate('update')}>Cancel</Button>
                        </Form>
                        </ModalBody>
                    </Modal>

                    {/* Modal for Delete Friend */}
                    <Modal isOpen={this.state.modalDelete} toggle={() => this.toggleModal('delete')}>
                        <ModalHeader toggle={() => this.toggleModal('delete')} className='bg-dark text-white'>Delete Friend</ModalHeader>
                        <ModalBody className='bg-dark text-white'>
                            {`Are you sure you want to delete ${this.props.friend.name}?`}
                        </ModalBody>
                        <ModalFooter className='bg-dark text-white'>
                            <Button color='danger' onClick={this.handleDelete}>Delete</Button>{' '}
                            <Button color='secondary' onClick={() => this.toggleModal('delete')}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}