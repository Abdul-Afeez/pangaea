import React from "react";
import "./Product.css"

export function Product({model}) {

    return (<section className="product-box text-center col-6 col-md-4 d-flex flex-column align-items-center justify-content-end">
        <div className="d-flex flex-column align-items-center justify-content-center">
            <img className="product-image" src={model.image_url} alt=""/>

        </div>
        <h5 className="">{model.title}</h5>
        <h6 className="p-1 pb-2">From {model.price}</h6>
        <button className="add-to-cart">Add to Cart</button>
    </section>)
}
