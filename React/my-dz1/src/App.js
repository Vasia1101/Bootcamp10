import React, { Component, createRef } from "react";
import Header from "./Header/Header";
import OrderPage from "./OrderHistory/OrderPage";

import Auth from "./Auth/Auth";
import MenuPage from "./Component/MenuPage";
import Modal from "./Modal";
// import s from "./App.css";
import SignUp from "./Auth/AuthSignUp";
import SignIn from "./Auth/AuthSignIn";

class App extends Component {
  containerRef = createRef();
  state = { visible: false };
  handleClickOpenModal = () => {
    this.setState({ visible: true });
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({ visible: false });
    }
  };
  handleClickCloseModal = () => {
    this.setState({ visible: false });
  };
  handleWindowClick = e => {
    const isTargetInContainer = this.containerRef.current.contains(e.target);
    console.log("isTargetInContainer", isTargetInContainer);
    const { visible } = this.state;
    if (visible && !isTargetInContainer) {
      this.handleClickCloseModal();
    }
  };
  shouldComponentUpdate(nextProps, nextState) {
    const { visible } = this.state;
    return nextState.visible !== visible;
  }
  render() {
    const { visible } = this.state;

    return (
      <div>
        <header>
          <div>
            <button onClick={this.handleClickOpenModal}>Click</button>
            {visible && (
              <Modal
                handleKeyDown={this.handleKeyDown}
                handleWindowClick={this.handleWindowClick}
                ref={this.containerRef}
                onClose={this.handleClickCloseModal}
              />
            )}
          </div>
          <Header />
        </header>
        <main>
          <OrderPage />
          <Auth items={[<SignUp />, <SignIn />]} />

          <MenuPage />
        </main>
      </div>
    );
  }
}

export default App;
