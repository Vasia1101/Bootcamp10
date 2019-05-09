import React from 'react';
import s from './Button.module.css';

const Button = ({type='buttton', label, onClick}) => (<button className={s.button} type={type} onClick={onClick}>{label}</button>)

export default Button;