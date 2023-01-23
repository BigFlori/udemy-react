import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const wrapperClasses = props.className ? props.className : classes.input
  return (
    <div className={wrapperClasses}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
