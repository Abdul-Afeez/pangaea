import React from "react";
import "./NavBar.css"
import {MapGlobalStateToProp} from "../../Store/MapStateToProp/MapGlobalStateToProp";
import {MapGlobalDispatchToProp} from "../../Store/MapDispatchToProp/MapGlobalDispatchToProp";
import {connect} from "react-redux";
export function _NavBar(props) {
    const {
        toggleCartSummary,
        openCartSummary
    } = props;
    const openCart = () => {
        toggleCartSummary(!openCartSummary)
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
const MapStateToProps = (state) => ({
    ...MapGlobalStateToProp(state)
});
const MapDispatchToProp = (dispatch) => ({
    ...MapGlobalDispatchToProp(dispatch)
});
export const NavBar = connect(MapStateToProps, MapDispatchToProp)(_NavBar);
