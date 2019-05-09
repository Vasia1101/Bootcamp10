import React, { Component } from "react";
import s from "./AuthLogUp.module.css";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  password: ""
};
export default class SignUp extends Component {
  state = {
    ...INITIAL_STATE
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmint = e => {
    e.preventDefault();
    const { name, email, phone, password } = this.state;
    console.log(`
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Password: ${password}
    `);
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const { name, email, phone, password } = this.state;
    return (
      <form onSubmit={this.handleSubmint} className={s.form2}>
        <label>
          <input
            type="name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
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
            type="phone"
            placeholder="Phone"
            name="phone"
            value={phone}
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
        <button className={s.btn}>Sign Up</button>
      </form>
    );
  }
}
