import React from 'react';
import classes from './Form.module.css';

const Form = ({ onSubmit = () => null, children }) => (
  <form className={classes.form} onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;
