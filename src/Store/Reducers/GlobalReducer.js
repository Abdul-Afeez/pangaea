import {GlobalActionTypes} from "../Actions/GlobalAction";
export const GlobalInitialState = {
    allProducts: new Map(),
    cart: new Map(),
    cartTotal: 0,
    openCartSummary: false,
    selectedCurrency: "USD",
    currencies: []
};
export function GlobalReducer(state = GlobalInitialState, action) {
    let versionedState;
    const { cart } = state;
    switch (action.type) {
        case GlobalActionTypes.UPDATE_CART:
            const copyCart = cart;
            const { model: { id, price, title, image_url }, quantity } = action.payload;
            const itemExists = copyCart.has(id);
            if (itemExists && quantity) {
                const cartItem = cart.get(id);
                cartItem.quantity = quantity;
                copyCart.set(id, {...cartItem});
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
                cartTotal: getCartTotal(cart)
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
                cartTotal: getCartTotal(cart)
            };
            break;
        default:
            versionedState = {...state}
    }
    return versionedState;
}

function getCartTotal(cart) {
    let total = 0;
    cart.forEach(cartItem => {
        total += (cartItem.price * cartItem.quantity);
    });
    return total;
}
