import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Create your acccount for free
        </h1>
        <SignUpForm />
      </div>
    );
  }
}
