export const GlobalActionTypes = {
    UPDATE_CART: 'UPDATE_CART',
    TOGGLE_CART_SUMMARY: 'TOGGLE_CART_SUMMARY',
    CHANGE_CURRENCY: 'CHANGE_CURRENCY',
    UPDATE_ALL_PRODUCTS: 'UPDATE_ALL_PRODUCTS',
    SAVE_CURRENCIES: 'SAVE_CURRENCIES'
};
export const GlobalActions = {
    updateCart: (data) =>({type: GlobalActionTypes.UPDATE_CART, payload: data}),
    toggleCartSummary: (data) => ({type: GlobalActionTypes.TOGGLE_CART_SUMMARY, payload: data}),
    changeCurrency: (data) => ({type: GlobalActionTypes.CHANGE_CURRENCY, payload: data}),
    updateAllProducts: (data) => ({type: GlobalActionTypes.UPDATE_ALL_PRODUCTS, payload: data}),
};
