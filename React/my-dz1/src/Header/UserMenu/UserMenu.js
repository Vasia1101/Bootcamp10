import React, { Component, createRef } from "react";

import ImgLogOut from "../../Img/login.png";
import IconPadMenu from "../../Img/menu.png";
import s from "./UserMenu.module.css";

class UserMenu extends Component {
  containerRef = createRef();
  state = {
    login: "Bob Rose",
    on: false
  };
  componentDidMount() {
    window.addEventListener("click", this.hendleWindowClick);
  }
  componentWillUnmount() {
    window.addEventListener("click", this.hendleWindowClick);
  }

  hendleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target
    );
    const { on } = this.state;
    if (on && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };
  shouldComponentUpdate(nextProps, nextState) {
    const { on } = this.state;
    return nextState.on !== on;
  }

  openDropdown = () => {
    this.setState({ on: true });
  };
  closeDropdown = () => {
    this.setState({ on: false });
  };
  toggle = () => {
    this.setState(prevState => ({
      on: !prevState.on
    }));
  };

  render() {
    const { login, on } = this.state;

    return (
      <>
        <div className={s.userLog} ref={this.containerRef}>
          <img
            className={s.fotoUser}
            src="https://placeimg.com/240/240/people"
            alt="avataruser"
          />
          <h1> Bob Ross </h1>
          <button onClick={this.toggle} className={s.butLogout}>
            <img className={s.imageIcons} src={IconPadMenu} alt="padMenu" />
          </button>

          {on && (
            <div className={s.userDropDown}>
              <ul>
                <li>
                  <a href="/"> -account </a>
                </li>
                <li>
                  <a href="/"> -order history </a>
                </li>
                <li>
                  <a href="/"> -meal planner </a>
                </li>
              </ul>
              <button onClick={this.toggle} className={s.butLogout}>
                LogOut {login}
                <img className={s.imageIcons} src={ImgLogOut} alt="icon" />
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default UserMenu;
