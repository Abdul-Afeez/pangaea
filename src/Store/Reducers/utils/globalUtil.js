export function getCartMeta(cart) {
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
