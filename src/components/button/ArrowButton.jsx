import React from 'react';
import './button.css';

function ArrowButton(props) {
  return (
    <button className={`btn-arrow ${props.className ?? ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ArrowButton;