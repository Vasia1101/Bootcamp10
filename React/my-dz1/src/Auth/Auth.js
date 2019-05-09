import React, { Component } from "react";
// import SignUp from "./AuthSignUp";
// import SignIn from "./AuthSignIn";

import s from "./Auth.module.css";

// const items = [<SignUp />, <SignIn />];

export default class Auth extends Component {
  state = { activeTabIndex: 0 };
  shouldComponentUpdate(nextProps, nextState) {
    const { activeTabIndex } = this.state;
    return nextState.activeTabIndex !== activeTabIndex;
  }
  changeTabIndex = idx => {
    this.setState({ activeTabIndex: idx });
  };
  render() {
    const { activeTabIndex } = this.state;
    const { items } = this.props;
    console.log(items);
    return (
      <div className={s.container}>
        <div className={s.action}>
          {items.map((item, idx) => (
            <button
              className={idx === activeTabIndex ? s.active : s.btn}
              type="button"
              key={item.type.name}
              onClick={() => this.changeTabIndex(idx)}
            >
              {item.type.name}
            </button>
          ))}
        </div>
        {activeTabIndex === 0 ? items[0] : items[1]}
      </div>
    );
  }
}
