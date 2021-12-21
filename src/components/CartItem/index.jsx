import React from "react";
import "./CartItem.css";
import {CartButton} from "../CartButton";
export function CartItem({ model: { image_url, title } }) {

    return (<section className="cart-item-box bg-white p-3 mt-3 d-flex justify-content-between position-relative">
        <div className="d-flex flex-column justify-content-between">
           <div>{title}</div>
           <div className="d-flex justify-content-between align-items-center">
               <CartButton quantity={100000} />
               <div>$600</div>
           </div>
        </div>
        <div className="d-flex align-items-center">
            <img className="cart-item-image" src={image_url} alt={title} />
        </div>
        <span className="close cursor-pointer">x</span>

    </section>)
}
