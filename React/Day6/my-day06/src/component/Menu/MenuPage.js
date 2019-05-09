import React, { Component } from 'react';

import * as API from '../../services/api';

import MenuGrid from './MenuGrid'

export default class MenuPage extends Component{
    state={
        menu:[]
    }
    componentDidMount(){
        API.getAll().then(menu => {
            this.setState({menu});
        })
    }
    handleDelItem = id => {
        API.delById(id).then(isOk => {
            if (!isOk) return;
            this.setState(prevState => ({
                menu: prevState.menu.filter(item => item.id !== id),
            }));
        });
    };
    handleShowMore = id => {
        API.getById(id).then(item => {console.log(item);});
    };
    handleAddItem = () => {
        const item = {
            name: 'New dish',
            price: Math.random(),
            image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640'
        };
        API.addItem(item).then(newItem => {
            this.setState(prevState => ({
                menu:[...prevState.menu, newItem]
            }))})
    }
render() {
    const {menu} = this.state;
  return (
      <div>
          <button type="button" onClick={this.handleAddItem}>Add element</button>
    <MenuGrid items={menu} onDelete={this.handleDelItem} onShowMore={this.handleShowMore}/>
    </div>
  )
}

}