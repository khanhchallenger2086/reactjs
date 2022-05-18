import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: true,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromModal();
    }

    handleOnChangeInput = (e, id) => {
        let copyState = { ...this.state };
        copyState[id] = e.target.value // như 1 vòng lặp gán giá chị e.target.value 

        this.setState({
            ...copyState
        })
    }

    //  this.state.email = this.state['email']  2 kiểu viết này giống nhau

    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']

        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('missing parameter :' + arrInput[i]);
                break;
            }
        }

        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidInput();

        if (isValid === true) {
            this.props.createNewUser(this.state); // xài props function của th cha
        }
    }

    render() {
        return (
            <div className="text-center" >
                <Modal
                    isOpen={this.props.isOpen} // xài props của th cha
                    toggle={() => { this.toggle() }}
                    className={'modal-user-container'}
                    size="lg"
                    centered={true}
                >
                    <ModalHeader toggle={() => { this.toggle() }}>Modal title</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email:</label>
                                <input type='text' onChange={(e) => this.handleOnChangeInput(e, 'email')} value={this.state.email} />
                            </div>

                            <div className='input-container'>
                                <label>Password:</label>
                                <input type='password' onChange={(e) => this.handleOnChangeInput(e, 'password')} value={this.state.password} />
                            </div>
                            <div className='input-container'>
                                <label>Frist Name:</label>
                                <input type='text' onChange={(e) => this.handleOnChangeInput(e, 'firstName')} value={this.state.firstName} />
                            </div>
                            <div className='input-container'>
                                <label>Last Name:</label>
                                <input type='text' onChange={(e) => this.handleOnChangeInput(e, 'lastName')} value={this.state.lastName} />
                            </div>
                            <div className='input-container max-width-input'>
                                <label>Address:</label>
                                <input type='text' onChange={(e) => this.handleOnChangeInput(e, 'address')} value={this.state.address} />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleAddNewUser() }}>Add new</Button>{' '}
                        <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


