import React, {useEffect} from "react";
import "./CartButton.css";
import {MapGlobalStateToProp} from "../../Store/MapStateToProp/MapGlobalStateToProp";
import {MapGlobalDispatchToProp} from "../../Store/MapDispatchToProp/MapGlobalDispatchToProp";
import {connect} from "react-redux";
export function _CartButton(props) {
    const {
        model,
        cart,
        updateCart,
    } = props;
    useEffect(() => {
        getQuantity();
    }, [props]);

    const { id } = model;
    const getQuantity = () => {
        return cart.get(id).quantity
    };
    const addToCart = (factor) => {
        const existingQuantity = cart.has(id) ? cart.get(id).quantity : 0;
        updateCart({model, quantity: existingQuantity + factor});
    };
    return (<section className="cart-button-box user-select-none  d-flex align-items-center justify-content-between">
        <div onClick={() => addToCart(-1)} className="quantity-control cursor-pointer">-</div>
        <div className="font-size-0-9 pt-1">{getQuantity()}</div>
        <div onClick={() => addToCart(1)} className="quantity-control cursor-pointer">+</div>
    </section>)
}
const MapStateToProps = (state) => ({
    ...MapGlobalStateToProp(state)
});
const MapDispatchToProp = (dispatch) => ({
    ...MapGlobalDispatchToProp(dispatch)
});
export const CartButton = connect(MapStateToProps, MapDispatchToProp)(_CartButton);
