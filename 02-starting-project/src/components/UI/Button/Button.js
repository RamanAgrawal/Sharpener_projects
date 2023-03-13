import React from 'react';

import './Button.css';

const Button = props => {
  let classes=`button`
  if(!props.colorChange){

    classes=`button invalid`
  }
  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
