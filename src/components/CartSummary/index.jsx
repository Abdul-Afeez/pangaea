import React, {useEffect} from "react";
import "./CartSummary.css"
import ChevIcon from "../../assets/chev-icon.png"
import {MapGlobalStateToProp} from "../../Store/MapStateToProp/MapGlobalStateToProp";
import {MapGlobalDispatchToProp} from "../../Store/MapDispatchToProp/MapGlobalDispatchToProp";
import {connect} from "react-redux";
import {CartItem} from "../CartItem";
export function _CartSummary(props) {

    const {
        cart,
        toggleCartSummary,
        openCartSummary,
        cartTotal,
        selectedCurrency,
        currencies,
        fetchCurrenciesProposal,
        changeCurrencyProposal,
    } = props;
    useEffect(() => {
        fetchCurrenciesProposal();
    }, []);
    const toggleCart = () => {
        toggleCartSummary(!openCartSummary)
    };
    const renderCartItems = () => {
        const cartItems = [];
        cart.forEach(cartItem => {
            cartItems.push(cartItem)
       });
       return  cartItems.map(product => <CartItem key={product.id} model={product} />)
    };
    const handleChangeCurrency = ({ target: { value } }) => {
        changeCurrencyProposal(value);
    };
    return (<section className="cart-summary">
        <div className="cart-summary-box position-relative ">
            <div className="content grey-bg p-4 d-flex flex-column justify-content-between">
               <div >
                   <div className="text-center mb-2">
                       My Shopping Cart
                   </div>
                   <div className="d-flex justify-content-between">
                       <div><img onClick={toggleCart} className="cursor-pointer" src={ChevIcon} alt=""/></div>
                       <select onChange={handleChangeCurrency} defaultValue={selectedCurrency} className="cursor-pointer" name="" id="">
                           {currencies.map(currency => <option
                               key={currency}
                               value={currency}>{currency}</option>)}
                       </select>
                   </div>
                   <br/>
                   <div className="cart-item-list-box">
                       {renderCartItems()}
                   </div>
               </div>
               <div>
                   <div className="d-flex pb-3 justify-content-between">
                       <div><strong>SUBTOTAL</strong></div>
                       <div><strong>{`${selectedCurrency} ${cartTotal}`}</strong></div>
                   </div>
                   <button className="cart-button-box checkout-btn text-white deep-green-bg"><strong>PROCEED TO CHECKOUT</strong></button>
               </div>
            </div>
            <div className="overlay" onClick={() => toggleCartSummary(false)} />
        </div>
    </section>)
}
const MapStateToProps = (state) => ({
    ...MapGlobalStateToProp(state)
});
const MapDispatchToProp = (dispatch) => ({
    ...MapGlobalDispatchToProp(dispatch),
    fetchCurrenciesProposal: () => dispatch({type: 'FETCH_CURRENCIES_PROPOSAL'}),
    changeCurrencyProposal: (payload) => dispatch({type: 'CHANGE_CURRENCY_PROPOSAL', payload}),
});
export const CartSummary = connect(MapStateToProps, MapDispatchToProp)(_CartSummary);
