import React from 'react';
import s from './Button.module.css';


const Button = ({label='', onClick = ()=>null, type='button', castomClassName = ''}) => (
<button onClick={onClick} type={type} className={ castomClassName === '' ? s.button : `${s.button} ${castomClassName}`}>{label}</button>
);

export default Button;