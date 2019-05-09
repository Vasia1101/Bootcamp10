import React from 'react';
import AuthManeger from './AuthManeger';
import s from './AppBar.module.css';

const AppBar = () => (
    <header className={s.container}>
    <AuthManeger />
    </header>
)
 export default AppBar;