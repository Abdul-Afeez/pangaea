export const MapGlobalStateToProp = (state)=> ({
   allProducts: state.globalState.allProducts,
   currencies: state.globalState.currencies,
   cart: state.globalState.cart,
   loadingProducts: state.globalState.loadingProducts,
   cartTotal: state.globalState.cartTotal,
   cartSize: state.globalState.cartSize,
   openCartSummary: state.globalState.openCartSummary,
   selectedCurrency: state.globalState.selectedCurrency
});
