import React, { Component } from "react";
import OrderList from "./OrderHistory";
import ModalHistory from "./ModalHistory";
import * as API from "../Component/services/menu-api";

const ADD_HISTORY = {
  date: "",
  rait: "",
  address: "",
  price: ""
};

export default class OrderPage extends Component {
  state = {
    history: [],
    visible: false,
    text: "",
    onform: false,
    ...ADD_HISTORY,
    isLoading: false
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    API.getAllOrderItem().then(history => {
      this.setState({ history, isLoading: false });
    });
  }
  handleDelOrderItem = id => {
    API.delOrderItem(id).then(isOk => {
      if (!isOk) return;
      this.setState(prevState => ({
        history: prevState.history.filter(item => item.id !== id)
      }));
    });
  };
  // showMoreOrderHistory = id => {
  //   API.getOrderItemById(id).then(item => {
  //     console.log(JSON.stringify(item));
  //     this.setState({ text: item.price });
  //   });
  // };
  handleClickOpenModal = id => {
    this.setState({ visible: true });
    API.getOrderItemById(id).then(item => {
      console.log(JSON.stringify(item));
      this.setState({ text: JSON.stringify(item) });
    });
  };
  handleClickCloseModal = () => {
    this.setState({ visible: false });
  };
  handleOpenFormAddHistory = () => {
    this.setState({ onform: true });
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(target);
  };
  sendAddHistory = e => {
    e.preventDefault();
    const item = {
      id: ``,
      date: `${this.state.date}`,
      address: `${this.state.address}`,
      price: `${this.state.price}`,
      rating: `${this.state.rait}`
    };
    API.addOrderItem(item).then(newItem => {
      this.setState(state => ({ history: [...state.history, newItem] }));
    });
    this.setState({ onform: false });
  };
  render() {
    const {
      history,
      visible,
      text,
      onform,
      date,
      rait,
      address,
      price,
      isLoading
    } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleOpenFormAddHistory}>
          Add History
        </button>
        {onform && (
          <form onSubmit={this.sendAddHistory}>
            <label>
              <input
                type="date"
                name="date"
                placeholder="Дата замовлення"
                value={date}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                type="text"
                name="price"
                placeholder="Ціна"
                value={price}
                onChange={this.handleChange}
              />
            </label>
            <label>
              <input
                type="text"
                name="address"
                placeholder="Адреса"
                value={address}
                onChange={this.handleChange}
              />
            </label>
            Рейтиг
            <select name="rait" value={rait} onChange={this.handleChange}>
              <option value="">...</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button>Додати</button>
          </form>
        )}
        <div>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <OrderList
              items={history}
              onDelete={this.handleDelOrderItem}
              onShowMoreInfo={this.handleClickOpenModal}
            />
          )}
        </div>
        {visible && (
          <ModalHistory text={text} onClose={this.handleClickCloseModal} />
        )}
      </>
    );
  }
}
