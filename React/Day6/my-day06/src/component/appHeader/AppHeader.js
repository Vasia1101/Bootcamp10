import React from 'react';
import logo from './assets/logo.png';
import avatar from './assets/avatar.jpg';
import s from './AppHeader.module.css';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';

const navItem = ['menu', 'about', 'contact', 'delivery']

const AppHeader = () => (
    <header className={s.header}>
<div className={s.logo}>
<Logo image={logo}/>

</div>
<Navigation items={navItem}/>
<div className={s.usermenu}>
<UserMenu avatar={avatar} name='Bob Marly'/>
</div>



    </header>
);

export default AppHeader;