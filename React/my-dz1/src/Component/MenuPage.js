import React, { Component } from "react";
import MenuGrid from "./MenuGrid";
import * as API from "./services/menu-api";
import MenuCridMoreInfo from "./MenuGridMoreInfo";

import s from "./MenuPage.module.css";

const IN_RESETSTATE = {
  textarea: "",
  rait: ""
};

export default class MenuPage extends Component {
  state = {
    menu: [],
    ...IN_RESETSTATE
  };
  componentDidMount() {
    API.getAllMenuItems().then(menu => {
      this.setState({ menu });
    });
    // API.getMenuItemById();
  }

  // onShowMoreInfo, onDelete

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(isOk => {
      if (!isOk) return;
      this.setState(prevState => ({
        menu: prevState.menu.filter(item => item.id !== id)
      }));
    });
  };
  handleShowMoreInfo = id => {
    API.getMenuItemById(id).then(item => {
      console.log(item);
    });
  };
  handleAddMenuItem = () => {
    const item = {
      name: Date.now(),
      price: Math.random() * 1000,
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?cs=srgb&dl=biriyani-chicken-cooked-1624487.jpg&fm=jpg"
    };
    API.addMenuItem(item).then(newItem => {
      this.setState(state => ({ menu: [...state.menu, newItem] }));
    });
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(target);
  };
  sendComment = e => {
    e.preventDefault();
    const { textarea, rait } = this.state;
    console.log(`Comment:${textarea} Rait:${rait}`);
    this.reset();
  };
  reset = () => {
    this.setState({ ...IN_RESETSTATE });
    alert("Thanks");
  };
  render() {
    const { menu } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleAddMenuItem}>
          Add id
        </button>
        <div className={s.itemMenu}>
          <MenuGrid
            items={menu}
            onDelete={this.handleDeleteItem}
            onShowMoreInfo={this.handleShowMoreInfo}
          />
        </div>
        <MenuCridMoreInfo
          items={menu}
          sendComment={this.sendComment}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}
