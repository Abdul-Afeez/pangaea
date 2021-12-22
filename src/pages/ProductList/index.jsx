import React, {useEffect} from "react";
import {NavBar} from "../../components/NavBar";
import "./ProductList.css";
import {Product} from "../../components/Product";
import {CartSummary} from "../../components/CartSummary";
import {MapGlobalStateToProp} from "../../Store/MapStateToProp/MapGlobalStateToProp";
import {MapGlobalDispatchToProp} from "../../Store/MapDispatchToProp/MapGlobalDispatchToProp";
import {connect} from "react-redux";

export function _ProductList(props) {
    const{
        openCartSummary,
        selectedCurrency,
        allProducts,
        fetchProductProposal
    } = props;
    useEffect(() => {
        fetchProductProposal(selectedCurrency)
    }, []);
    const renderAllProducts = () => {
        const products = [];
        allProducts.forEach(product => products.push(<Product key={product.id} model={product}/>))
        return products;
    };
    return (<section className="overflow-x-hidden">
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
        <article className="deep-grey-bg row">
            {renderAllProducts()}
        </article>
        { openCartSummary && <CartSummary /> }
    </section>)
}
const MapStateToProps = (state) => ({
    ...MapGlobalStateToProp(state)
});
const MapDispatchToProp = (dispatch) => ({
    ...MapGlobalDispatchToProp(dispatch),
    fetchProductProposal: (currency) => dispatch({type: 'FETCH_PRODUCTS_PROPOSAL', payload: { currency }})
});
export const ProductList = connect(MapStateToProps, MapDispatchToProp)(_ProductList);
