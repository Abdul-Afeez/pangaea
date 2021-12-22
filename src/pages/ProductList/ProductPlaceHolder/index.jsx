import React from "react";
import "./ProductPlaceHolder.css";
export function ProductPlaceHolder() {
    return (<section className="col-6 col-md-4">
        <div className="placeholder-box p-3 d-flex flex-column justify-content-end">
            <div className="image-box mb-2 mt-5"/>
            <div className="title-box mb-2"/>
            <div className="button-box mb-5"/>
        </div>
    </section>)
}
