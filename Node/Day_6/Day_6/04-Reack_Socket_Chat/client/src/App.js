import React, { Component } from "react";
import ModalLogin from "./component/Modal/Modals";
import Chat from "./component/Modal/Chat";
import "./App.css";

export default class App extends Component {
  state = {
    loginName: "",
    modal: false
  };
  handleChange = e => {
    e.preventDefault();
    let name = e.target.value;
    this.setState({
      loginName: name
    });
  };
  toggleModal = () => {
    this.setState(prev => ({ modal: !prev.modal }));
  };
  render() {
    const { modal, loginName } = this.state;
    return (
      <>
        {modal ? (
          <ModalLogin
            modal={modal}
            onChange={this.handleChange}
            loginName={loginName}
            toggle={this.toggleModal}
          />
        ) : (
          <Chat login={loginName} />
        )}
      </>
    );
  }
}
