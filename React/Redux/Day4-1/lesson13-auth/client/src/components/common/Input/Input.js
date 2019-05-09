import React from 'react';
import classes from './Input.module.css';

const Input = ({
  type = 'text',
  name = '',
  value = '',
  onChange = () => null,
  placeholder = ''
}) => (
  <input
    className={classes.input}
    type={type}
    onChange={onChange}
    name={name}
    value={value}
    placeholder={placeholder}
  />
);

export default Input;
