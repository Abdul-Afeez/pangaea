import React from "react";
import "./CartItem.css";
import {CartButton} from "../CartButton";
import {MapGlobalStateToProp} from "../../Store/MapStateToProp/MapGlobalStateToProp";
import {MapGlobalDispatchToProp} from "../../Store/MapDispatchToProp/MapGlobalDispatchToProp";
import {connect} from "react-redux";
export function _CartItem(props) {
    const {
        model,
        updateCart
    } = props;
    const removeItem = () => {
        updateCart({model, quantity: 0});
    }
    const  { image_url, title, price } = model;
    return (<section className="cart-item-box bg-white p-3 mt-3 d-flex justify-content-between position-relative">
        <div className="d-flex flex-column justify-content-between">
           <div>{title}</div>
           <div className="d-flex justify-content-between align-items-center">
               <CartButton model={model} />
               <div>{price}</div>
           </div>
        </div>
        <div className="d-flex align-items-center">
            <img className="cart-item-image" src={image_url} alt={title} />
        </div>
        <span onClick={removeItem} className="close cursor-pointer">x</span>

    </section>)
}
const MapStateToProps = (state) => ({
    ...MapGlobalStateToProp(state)
});
const MapDispatchToProp = (dispatch) => ({
    ...MapGlobalDispatchToProp(dispatch)
});
export const CartItem = connect(MapStateToProps, MapDispatchToProp)(_CartItem);
