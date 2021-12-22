import React, {useEffect} from "react";
import {NavBar} from "../../components/NavBar";
import "./ProductList.css";
import {Product} from "./Product";
import {CartSummary} from "../../components/CartSummary";
import {MapGlobalStateToProp} from "../../Store/MapStateToProp/MapGlobalStateToProp";
import {connect} from "react-redux";
import {ProductPlaceHolder} from "./ProductPlaceHolder";

export function _ProductList(props) {
    const{
        openCartSummary,
        selectedCurrency,
        loadingProducts,
        allProducts,
        fetchProductProposal,
    } = props;
    useEffect(() => {
        fetchProductProposal(selectedCurrency)
    }, [selectedCurrency, fetchProductProposal]);
    const renderAllProducts = () => {
        const products = [];
        allProducts.forEach(product => products.push(<Product key={product.id} model={product}/>))
        return products;
    };
    const renderProductPlaceHolders = () => {
        return  new Array(3).fill(0).map((item, index) => <ProductPlaceHolder key={`a-${index}`} />);
    };
    return (<section className={openCartSummary ? 'stiff' : 'overflow-x-hidden'}>
        <header>
            <NavBar/>
        </header>
        <article className="container">
            <br/> <br/>
           <div className="d-flex justify-content-between align-items-end">
               <div>
                   <h1>All Products</h1>
                   <h6>A 360° look at Lumin</h6>
               </div>
               <div>
                   <select className="filter" name="filter" id="filter">
                       <option value="default">Filter by</option>
                   </select>
               </div>
           </div>
        </article>
        <br/>
        <br/>
        <article className="deep-grey-bg row products-box">
            {loadingProducts ? renderProductPlaceHolders() : renderAllProducts()}
            <div className="w-100" />
            <br/><br/><br/>
        </article>
        { openCartSummary && <CartSummary /> }
    </section>)
}
const MapStateToProps = (state) => ({
    ...MapGlobalStateToProp(state)
});
const MapDispatchToProp = (dispatch) => ({
    fetchProductProposal: (currency) => dispatch({type: 'FETCH_PRODUCTS_PROPOSAL', payload: { currency }})
});
export const ProductList = connect(MapStateToProps, MapDispatchToProp)(_ProductList);
