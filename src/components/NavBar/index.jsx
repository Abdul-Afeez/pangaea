import React from "react";
import "./NavBar.css";
import CartIcon from "../../assets/cart.png"
import {MapGlobalStateToProp} from "../../Store/MapStateToProp/MapGlobalStateToProp";
import {MapGlobalDispatchToProp} from "../../Store/MapDispatchToProp/MapGlobalDispatchToProp";
import {connect} from "react-redux";
export function _NavBar(props) {
    const {
        toggleCartSummary,
        openCartSummary,
        cartSize
    } = props;
    const openCart = () => {
        toggleCartSummary(!openCartSummary)
    };
    return (<nav>
        <div className="nav-box grey-bg d-flex align-items-center ps-3 pe-5 justify-content-between">
            <ul>
                <li>
                    <a href="/#">
                        <img className="logo" src="https://www.luminskin.com/_next/static/images/logo-20c2cb1d9d2bb6d2139d0e5cec3103bd.png" alt=""/>
                    </a>
                </li>
                <li>
                    <a className="deep-green-color" href="/#">Shop</a>
                </li>
                <li><a className="deep-green-color" href="/#">Learn</a></li>
            </ul>
            <ul>
                <li><a className="deep-green-color" href="/#">Account</a></li>
                <li className="position-relative" onClick={openCart}>
                    <a className="deep-green-color" href="/#" >
                    <img src={CartIcon} alt=""/>
                    </a>
                    <span className="cart-size cursor-pointer">{cartSize}</span>
                </li>
            </ul>
        </div>
    </nav>)
}
const MapStateToProps = (state) => ({
    ...MapGlobalStateToProp(state)
});
const MapDispatchToProp = (dispatch) => ({
    ...MapGlobalDispatchToProp(dispatch)
});
export const NavBar = connect(MapStateToProps, MapDispatchToProp)(_NavBar);
