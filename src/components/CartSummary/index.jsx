import React, {useEffect} from "react";
import "./CartSummary.css"
import ChevIcon from "../../assets/chev-icon.png"
import {MapGlobalStateToProp} from "../../Store/MapStateToProp/MapGlobalStateToProp";
import {MapGlobalDispatchToProp} from "../../Store/MapDispatchToProp/MapGlobalDispatchToProp";
import {connect} from "react-redux";
import {CartItem} from "../CartItem";
import {numberWithCommas} from "../../Store/Reducers/GlobalReducer";
export function _CartSummary(props) {

    const {
        cart,
        toggleCartSummary,
        openCartSummary,
        cartTotal,
        cartSize,
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
            <div className={`content grey-bg p-4 d-flex  flex-column justify-content-between`}>
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
                       {!!cartSize ? renderCartItems() : (
                           <div className="d-flex align-items-center h-100 w-100" >
                               <div className="no-cart-size text-center w-100">There are no items in your cart
                                   <br/>
                                   Get shopping >>
                               </div>
                           </div>
                       )}
                   </div>
               </div>
                { !!cartSize && <div>
                   <div className="d-flex pb-3 justify-content-between">
                       <div><strong className="font-size-0-9">SUBTOTAL</strong></div>
                       <div><strong className="font-size-0-9">{`${selectedCurrency} ${numberWithCommas(cartTotal.toFixed(2))}`}</strong></div>
                   </div>
                   <button className="cart-button-box checkout-btn text-white deep-green-bg"><strong>PROCEED TO CHECKOUT</strong></button>
               </div>}
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
