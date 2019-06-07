import React, { Component } from "react";
import md5 from "md5";
import firebase from "../firebase";
import {
  Button,
  Form,
  Header,
  Grid,
  Message,
  Input,
  Icon,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const INITIAL_VALUE = {
  userName: "",
  email: "",
  password: "",
  passwordConfirm: "",
  nameError: false,
  emailError: false,
  passwordError: false,
  confirmPasswordError: false,
  coincidenceError: false,
  messageError: "",
  errorDB: false,
  errors: "",

  usersRef: firebase.database().ref("users")
};

export default class RegistrationForm extends Component {
  state = {
    ...INITIAL_VALUE
  };

  isFormValid;
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.isFormValid()) {
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(createdUser => {
        console.log(createdUser);
        createdUser.user
          .updateProfile({
            displayName: this.state.userName,
            photoURL: `https://gravatar.com/avatar/${md5(
              createdUser.user.email
            )}?d=identicon`
          })
          .then(() => {
            this.saveUpdatedUser(createdUser).then(() => {
              console.log("user saved");
              console.log(this.state);
              this.reset();
            });
          })
          .catch(err => {
            console.log(err);
            this.setState({ errors: err });
          });
      });
  };

  saveUpdatedUser = createdUser => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL
    });
  };

  reset = () => {
    this.setState({
      ...INITIAL_VALUE
    });
  };
  isNameValid = name => {
    console.log(name);
    if (name === "") {
      this.setState({ nameError: true });
      return false;
    }
    this.setState({ nameError: false });
    return true;
  };

  isEmailValid = email => {
    console.log(email);

    if (email === "") {
      this.setState({ emailError: true });
      return false;
    }
    this.setState({ emailError: false });
    return true;
  };

  isPasswordValid = password => {
    if (password === "") {
      this.setState({ passwordError: true });
      return false;
    }
    this.setState({ passwordError: false });
    return true;
  };

  isConfirmPasswordValid = passwordConfirm => {
    if (passwordConfirm === "") {
      this.setState({ confirmPasswordError: true });
      this.setState({ messageError: "Поле не должно быть пустым" });
      return false;
    }
    this.setState({ confirmPasswordError: false });
    return true;
  };

  isPasswordConfirm = (password, passwordConfirm) => {
    if (password.length < 6) {
      this.setState({ confirmPasswordError: true });
      this.setState({
        messageError: "Пароль должен быть не менее 6 знаков "
      });
      return false;
    }
    if (password !== passwordConfirm) {
      this.setState({ confirmPasswordError: true });
      this.setState({
        messageError:
          "Пароль не подтвержден. В полях 'Password' и 'Confirm your password' значения должны совпадать "
      });
      return false;
    }
    this.setState({ confirmPasswordError: false });
    return true;
  };

  isFormValid = () => {
    return (
      this.isNameValid(this.state.userName) &&
      this.isEmailValid(this.state.email) &&
      this.isPasswordValid(this.state.password) &&
      this.isConfirmPasswordValid(this.state.passwordConfirm) &&
      this.isPasswordConfirm(this.state.password, this.state.passwordConfirm)
    );
  };

  render() {
    const { userName, email, password, passwordConfirm, errors } = this.state;
    return (
      <Grid textAlign="center" style={{ height: "100%", paddingTop: 100 }}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form onSubmit={this.handleSubmit} size="large">
            <Header as="h2" color="black" textAlign="center">
              Registration
            </Header>
            <Icon name="user secret" size="huge" />
            <Segment stacked>
              <Form.Field error={this.state.nameError}>
                <label>Username</label>
                <Input iconPosition="left">
                  <Icon name="user" />
                  <input
                    type="text"
                    name="userName"
                    value={userName}
                    placeholder="userName"
                    onChange={this.handleChange}
                    error="nameError"
                  />
                </Input>
              </Form.Field>

              <Message
                error={!this.state.nameError}
                header="Ошибка"
                content="Поле не может быть пустым"
              />

              <Form.Field error={this.state.emailError}>
                <label>E-mail address</label>
                <Input iconPosition="left">
                  <Icon name="mail" />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="E-mail address"
                    onChange={this.handleChange}
                    error="emailError"
                  />
                </Input>
              </Form.Field>
              <Message
                error={!this.state.emailError}
                header="Ошибка"
                content="Поле не может быть пустым"
              />

              <Form.Field error={this.state.passwordError}>
                <label>Password</label>
                <Input iconPosition="left">
                  <Icon name="lock" />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </Input>
              </Form.Field>
              <Message
                error={!this.state.passwordError}
                header="Ошибка"
                content="Поле не может быть пустым"
              />
              <Form.Field error={this.state.confirmPasswordError}>
                <label />
                <Input iconPosition="left">
                  <Icon name="lock" />
                  <input
                    type="password"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    placeholder="Confirm your password"
                    onChange={this.handleChange}
                  />
                </Input>
              </Form.Field>
              <Message
                error={!this.state.confirmPasswordError}
                header="Ошибка"
                content={this.state.messageError}
              />
              <Button color="grey" fluid size="large" type="submit">
                Sign up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
