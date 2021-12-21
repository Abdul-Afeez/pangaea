import React from "react";
import "./CartSummary.css"
import ChevIcon from "../../assets/chev-icon.png"
import {CartItem} from "../CartItem";
export function CartSummary() {
    const products = [
        {
            "id": 3,
            "title": "Premium-Grade Moisturizing Balm",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
        },
        {
            "id": 2,
            "title": "No-Nonsense Charcoal Cleanser",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/charcoal-cleanser.png"
        },
        {
            "id": 3,
            "title": "Premium-Grade Moisturizing Balm",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
        },
        {
            "id": 2,
            "title": "No-Nonsense Charcoal Cleanser",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/charcoal-cleanser.png"
        },
        {
            "id": 3,
            "title": "Premium-Grade Moisturizing Balm",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
        },
        {
            "id": 2,
            "title": "No-Nonsense Charcoal Cleanser",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/charcoal-cleanser.png"
        },
    ];
    return (<section className="cart-summary">
        <div className="cart-summary-box position-relative ">
            <div className="content grey-bg p-4 d-flex flex-column justify-content-between">
               <div >
                   <div className="text-center mb-2">
                       My Shopping Cart
                   </div>
                   <div className="d-flex justify-content-between">
                       <div><img className="cursor-pointer" src={ChevIcon} alt=""/></div>
                       <select className="cursor-pointer" name="" id="">
                           <option value="HRK">HRK</option>
                       </select>
                   </div>
                   <br/>
                   <div className="cart-item-list-box">
                       {products.map(product => <CartItem model={product} />)}
                   </div>
               </div>
               <div>
                   <div className="d-flex pb-3 justify-content-between">
                       <div><strong>SUBTOTAL</strong></div>
                       <div><strong>$1200000</strong></div>
                   </div>
                   <button className="cart-button-box checkout-btn text-white deep-green-bg"><strong>PROCEED TO CHECKOUT</strong></button>
               </div>
            </div>
            <div className="overlay" />
        </div>
    </section>)
}
