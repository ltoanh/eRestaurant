import React from 'react';
import styles from './input-row.module.css';

function InputRow(props) {
	return <div className={styles.input_row}>{props.children}</div>;
}

export default InputRow;

export const InputIcon = ({ className }) => {
	return <i className={className} />;
};

export const Input = ({ type = "text", name, value, setValue, placeholder = '' }) => {
	return (
		<input
      type={type}
			name={name}
			value={value}
			onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
		/>
	);
};
