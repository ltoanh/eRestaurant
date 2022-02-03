import React from 'react';
import './button.css';

function Button(props) {
	return (
		<button className={`${props.className ?? ''} btn`} onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default Button;
