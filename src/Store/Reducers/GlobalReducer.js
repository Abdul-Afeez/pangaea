import {GlobalActionTypes} from "../Actions/GlobalAction";
export const GlobalInitialState = {
    allProducts: new Map(),
    cart: new Map(),
    cartTotal: 0,
    cartSize: 0,
    openCartSummary: false,
    selectedCurrency: "USD",
    currencies: []
};
export function GlobalReducer(state = GlobalInitialState, action) {
    let versionedState;
    const { cart, openCartSummary } = state;
    switch (action.type) {
        case GlobalActionTypes.UPDATE_CART:
            const copyCart = cart;
            const { model: { id, price, title, image_url }, quantity } = action.payload;
            const itemExists = copyCart.has(id);
            if (itemExists && quantity) {
                const cartItem = cart.get(id);
                if (!openCartSummary) {
                    cart.delete(id);
                }
                copyCart.set(id, {...cartItem, quantity});
            }
            else if (!itemExists && quantity) {
                copyCart.set(id, { id, quantity, price, title, image_url })
            }
            else{
                cart.delete(id);
            }
            state.cart = copyCart;
            versionedState = {
                ...state,
                cart: copyCart,
                ...getCartMeta(cart)
            };
            break;
        case GlobalActionTypes.TOGGLE_CART_SUMMARY:
            versionedState = {
                ...state,
                openCartSummary: !!action.payload,
            };
            break;
        case GlobalActionTypes.SAVE_CURRENCIES:
            versionedState = {
                ...state,
                currencies: action.payload,
            };
            break;
        case GlobalActionTypes.CHANGE_CURRENCY:
            versionedState = {
                ...state,
                selectedCurrency: action.payload,
            };
            break;
        case GlobalActionTypes.UPDATE_ALL_PRODUCTS:
            const productsMap = new Map();
            action.payload.forEach((product) => {
                productsMap.set(product.id, product);
            });
            cart.forEach((cartItem) => {
                const referencedProduct = productsMap.get(cartItem.id);
                if (referencedProduct) {
                    cartItem.price = referencedProduct.price;
                    cart.set(cartItem.id, cartItem)
                }
            });
            versionedState = {
                ...state,
                allProducts: productsMap,
                cart: cart,
                ...getCartMeta(cart)
            };
            break;
        default:
            versionedState = {...state}
    }
    return versionedState;
}

function getCartMeta(cart) {
    let cartTotal = 0;
    let cartSize = 0;
    cart.forEach(cartItem => {
        cartTotal += (cartItem.price * cartItem.quantity);
        cartSize += cartItem.quantity
    });
    return {cartTotal, cartSize};
}
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
