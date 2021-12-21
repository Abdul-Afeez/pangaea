import React from "react";
import "./NavBar.css"
export function NavBar() {
    const openCart = () => {
        return false;
    };
    return (<nav>
        <div className="nav-box grey-bg d-flex align-items-center ps-3 pe-5 justify-content-between">
            <ul>
                <li>
                    <a href="#">
                        <img className="logo" src="https://www.luminskin.com/_next/static/images/logo-20c2cb1d9d2bb6d2139d0e5cec3103bd.png" alt=""/>
                    </a>
                </li>
                <li>
                    <a className="deep-green-color" href="#">Shop</a>
                </li>
                <li><a className="deep-green-color" href="#">Learn</a></li>
            </ul>
            <ul>
                <li><a className="deep-green-color" href="#">Account</a></li>
                <li><a className="deep-green-color" href="#" onClick={openCart}><i className="fa fa-cart-arrow-down" /></a></li>
            </ul>
        </div>
    </nav>)
}
