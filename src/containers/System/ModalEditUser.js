import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash';

class ModalEditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }

    }

    componentDidMount() {
        let user = this.props.currentEditUser;

        if (user && !_.isEmpty(user)) {
            this.setState({
                email: user.email,
                password: 'hashcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                id: user.id
            })
        }
    }

    toggle = () => {
        this.props.toggleFromModalEditUser();
    }


    // hàm này là hàm onchange input tự động viết lại state name value input mà ko cần viết nhiều lần nhiều function
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

    handleSaveUser = () => {
        let isValid = this.checkValidInput();

        if (isValid === true) {
            this.props.editUser(this.state); // xài props function của th cha
        }
    }

    render() {
        console.log('current pros', this.props)
        return (
            <div className="text-center" >
                <Modal
                    isOpen={this.props.isOpen} // xài props của th cha
                    toggle={() => { this.toggle() }}
                    className={'modal-user-container'}
                    size="lg"
                    centered={true}
                >
                    <ModalHeader toggle={() => { this.toggle() }}>Modal edit user</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email:</label>
                                <input type='text'
                                    onChange={(e) => this.handleOnChangeInput(e, 'email')}
                                    value={this.state.email}
                                    disabled
                                />
                            </div>

                            <div className='input-container'>
                                <label>Password:</label>
                                <input type='password'
                                    onChange={(e) => this.handleOnChangeInput(e, 'password')}
                                    value={this.state.password}
                                    disabled
                                />
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
                        <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser() }}>Save changes</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);


