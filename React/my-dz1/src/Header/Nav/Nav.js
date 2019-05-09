import React from 'react';
import s from './Nav.module.css';

const Nav = () => (

    <
    ul className = {
        s.nav
    } >
    <
    li > < a href = "/" > Menu < /a> </li >
    <
    li > < a href = "/" > About < /a> </li >
    <
    li > < a href = "/" > Contact < /a> </li >
    <
    li > < a href = "/" > Delivery < /a></li >

    <
    /ul>

)
export default Nav;