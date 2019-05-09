import React, { Component } from "react";

const INITIAL_STATE = {
  email: "",
  password: ""
};
export default class SignIn extends Component {
  state = {
    ...INITIAL_STATE
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(target);
  };
  handleSubmintLoginIn = evt => {
    evt.preventDefault();
    const { email, password } = this.state;
    console.log(`
        Email: ${email}
        Password: ${password}
    `);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const { email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmintLoginIn}>
          <label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button>Sign in</button>
        </form>
      </>
    );
  }
}
