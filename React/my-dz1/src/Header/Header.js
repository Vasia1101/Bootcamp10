import React, { Component } from 'react';
import Nav from './Nav/Nav'
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu'
import s from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={s.header}> 
                            <Logo />
                            <Nav />
                            <UserMenu />
                            </div>                
        )
    }
}
export default Header;