const LOCALSTORAGE_NAME = 'PIZZDEE_CART'

export const storeCartToLocalStorage = (list) => localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(list));

export const getCartFromLocalStorage = () => JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));
