import { createSlice, current } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
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
		},
		updateQualityProduct: (state, { payload }) => {
			let updatingProduct = state.find((el) => el.product.id === payload.id);
			updatingProduct.quality = payload.quality;
		},
		removeProductFromCartByID: (state, { payload }) => {
			return state.filter((el) => el.product.id !== payload);
		},
	},
});

export const { addToCart, updateQualityProduct, removeProductFromCartByID } =
	cartSlice.actions;

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
