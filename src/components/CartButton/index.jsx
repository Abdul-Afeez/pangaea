import React from "react";
import "./CartButton.css";
export function CartButton({quantity}) {

    return (<section className="cart-button-box d-flex align-items-center justify-content-between">
        <div className="quantity-control cursor-pointer">-</div>
        <div>{quantity}</div>
        <div className="quantity-control cursor-pointer">+</div>
    </section>)
}
