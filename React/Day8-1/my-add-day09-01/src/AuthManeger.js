import React, {Component} from 'react';
import UserMenu from './UserMenu';
import Button from './Button';
import {AuthContext} from './context/AuthContext';

export default class AuthManeger extends Component {
    static contextType = AuthContext;
    render() {
        const {isAuthenticated, user, onSignIn, onSignOut} = this.context;
      return isAuthenticated ? ( <UserMenu {...user} onSignOut={onSignOut}/>) : (<Button label='Sign in' onClick={onSignIn}/>) 
      
    }
}
