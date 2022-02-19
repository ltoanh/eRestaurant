import React from 'react';
import StoreContent from './content/StoreContent';
import StoreHeader from './header/StoreHeader';

function Store() {
	return <div className="container">
		<StoreHeader />
		<StoreContent />
	</div>;
}

export default Store;
