import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../../redux/operations';
import Form from '../common/Form/Form';
import Input from '../common/Input/Input';
import Label from '../common/Label/Label';
import Button from '../common/Button/Button';

const INITIAL_STATE = { name: '', email: '', password: '' };

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label text="Name">
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>

        <Label text="Email">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="example@mail.com"
          />
        </Label>

        <Label text="Password">
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Sign up" type="submit" />
      </Form>
    );
  }
}

const mapDispatch = {
  onSubmit: operations.signUp
};

export default connect(
  null,
  mapDispatch
)(SignUpForm);
