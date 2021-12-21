import React from "react";
import {NavBar} from "../../components/NavBar";
import "./ProductList.css";
import {Product} from "../../components/Product";
import {useQuery} from "@apollo/client";
import {PRODUCTS_QUERY} from "../../queries/products";
// import {CartSummary} from "../../components/CartSummary";

export function ProductList() {
    const currency = "NGN";
    const { loading, error, data } = useQuery(PRODUCTS_QUERY, {
        variables: { currency  }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const {products} = data;
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
            {products.map(product => <Product model={product}/>)}
        </article>
        {/*<CartSummary />*/}
    </section>)
}
