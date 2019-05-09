import React, { Component, createRef } from 'react';
import DropDown from './dropDown/DropDown';
import s from './UserMenu.module.css';
import Avatar from '../avatar/Avatar';

export default class UserMenu extends Component{
    containerRef = createRef();
state = {
    isDropDownOpen:false
}
componentDidMount(){
    window.addEventListener('click', this.handleWindowClick)
}

componentWillUnmount(){
    window.removeEventListener('click', this.handleWindowClick)
}

shouldComponentUpdate(nextProps, nextState) {
    const {isDropDownOpen} = this.state;
    return nextState.isDropDownOpen !== isDropDownOpen;
}
handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(e.target);
    const {isDropDownOpen} = this.state;
    if (isDropDownOpen && !isTargetInsideContainer){
        this.closeDropdown();
    }
}

openDropdown = () => {
    this.setState({isDropDownOpen: true})
}
closeDropdown = () => {
    this.setState({isDropDownOpen: false})
}
    render() {
        const {isDropDownOpen} = this.state
        const {name, avatar} = this.props;
      return (
        <div className={s.container} onClick={this.openDropdown} ref={this.containerRef}>
          <Avatar image={avatar}/>
          <span className={s.name}>{name}</span>
          {isDropDownOpen && <DropDown />}
        </div>
      )
    }
}