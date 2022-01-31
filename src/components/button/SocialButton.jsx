import React from 'react';
import './button.css';

function SocialButton(props) {
  return (
    <button className={`btn-social ${props.className ?? ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default SocialButton;