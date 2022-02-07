import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLocalStorage, storeCartToLocalStorage } from 'utils/localStorageCart';

const initialState = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		initialStorageCart: () => {
			const initLocalCart = getCartFromLocalStorage();
			if(initLocalCart.length > 0){
				return initLocalCart
			}
			return [];
		},
		addToCart: (state, { payload }) => {
			// find if exist product
			let shoppingProduct = state.find(
				(el) => el.product.id === payload.product.id
			);
			if (!shoppingProduct) {
				state.push(payload);
			} else {
				shoppingProduct.quality += payload.quality;
			}
			storeCartToLocalStorage(state);
		},
		updateQualityProduct: (state, { payload }) => {
			let updatingProduct = state.find((el) => el.product.id === payload.id);
			updatingProduct.quality = payload.quality;
			storeCartToLocalStorage(state);
		},
		removeProductFromCartByID: (state, { payload }) => {
			state = state.filter((el) => el.product.id !== payload);
			storeCartToLocalStorage(state);
			return state;
		},
		clearCart: () => {
			storeCartToLocalStorage([]);
			return [];
		}
	},
});

export const {
	initialStorageCart,
	addToCart,
	updateQualityProduct,
	removeProductFromCartByID,
	clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectorShoppingCart = (state) => state.cart;

/**
 * object product item
 * {
 *  product: {
 *    id: number,
 *    name: string,
 *    thumbnail_src: string,
 *  },
 *  quality: number
 * }
 */
