import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'assets/styles/styles.css';

// redux toolkit
import { Provider } from 'react-redux';
import { store } from 'app/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
