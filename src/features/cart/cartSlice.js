import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    changeQualityProductByID: (state, action) => {
      
    }
  }
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;

export const shoppingCart = state => state.cart;


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