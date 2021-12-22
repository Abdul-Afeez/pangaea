import React from "react";
import "./Product.css"
import {MapGlobalStateToProp} from "../../Store/MapStateToProp/MapGlobalStateToProp";
import {MapGlobalDispatchToProp} from "../../Store/MapDispatchToProp/MapGlobalDispatchToProp";
import {connect} from "react-redux";
import {numberWithCommas} from "../../Store/Reducers/GlobalReducer";

export function _Product(props) {
    const {
        model,
        cart,
        updateCart,
        toggleCartSummary,
        selectedCurrency
    } = props;
    const {id, price, title, image_url} = model;
    const addToCart = () => {
        const existingQuantity = cart.has(id) ? cart.get(id).quantity : 0;
        updateCart({model, quantity: existingQuantity + 1});
        toggleCartSummary(true);
    };
    return (<section className="product-box text-center col-6 col-md-4 d-flex flex-column align-items-center justify-content-end">
        <div className="d-flex flex-column align-items-center justify-content-center">
            <img className="product-image" src={image_url} alt=""/>

        </div>
        <h5 className="">{title}</h5>
        <h6 className="p-1 pb-2">From {`${selectedCurrency} ${numberWithCommas(price.toFixed(2))}`}</h6>
        <button onClick={addToCart} className="add-to-cart">Add to Cart</button>
    </section>)
}
const MapStateToProps = (state) => ({
    ...MapGlobalStateToProp(state)
});
const MapDispatchToProp = (dispatch) => ({
    ...MapGlobalDispatchToProp(dispatch)
});
export const Product = connect(MapStateToProps, MapDispatchToProp)(_Product);
