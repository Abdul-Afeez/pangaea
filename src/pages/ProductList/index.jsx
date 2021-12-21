import React from "react";
import {NavBar} from "../../components/NavBar";
import "./ProductList.css";
import {Product} from "../../components/Product";

export function ProductList() {
    const products = [
        {
        "id": 3,
        "title": "Premium-Grade Moisturizing Balm",
        "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
    },
        {
            "id": 2,
            "title": "No-Nonsense Charcoal Cleanser",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/charcoal-cleanser.png"
        },
        {
            "id": 42,
            "title": "Clarifying Body Wash",
            "image_url": "https://i.shgcdn.com/b44f5ef8-6bc0-4a4a-8eef-1f7ced30503d/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            "id": 39,
            "title": "Keratin Recovery Shampoo",
            "image_url": "https://i.shgcdn.com/4c9671b2-8161-4e58-b3b5-cefa74b74a05/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            "id": 40,
            "title": "Keratin Strengthening Conditioner",
            "image_url": "https://i.shgcdn.com/aaef22bc-bf48-4e0d-81c2-482265460220/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            "id": 41,
            "title": "Advanced Repair Scalp Treatment",
            "image_url": "https://i.shgcdn.com/f1ae9d7a-ca43-4a2d-a5cf-c45506a47708/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        },
        {
            "id": 14,
            "title": "Dark Circle Defense",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/dark-circle-defense.png"
        },
        {
            "id": 47,
            "title": "Intensive Repair Face Mask",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/face-mask.jpg"
        },
        {
            "id": 43,
            "title": "Anti-Fatigue Eye Patch",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/eye-patch.png"
        },
        {
            "id": 12,
            "title": "Anti-Wrinkle Defense",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/anti-wrinkle-serum.png"
        },
        {
            "id": 4,
            "title": "Reload Exfoliating Rub",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/reload-exfoliating-rub.png"
        },
        {
            "id": 44,
            "title": "Charcoal Cleansing Pore Strip",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/pore-strip.png"
        },
        {
            "id": 10,
            "title": "Age Management Collection",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png"
        },
        {
            "id": 13,
            "title": "Classic Maintenance",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/classic-maintenance.png"
        },
        {
            "id": 25,
            "title": "Correction Trio Collection",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/correction-trio.png"
        },
        {
            "id": 36,
            "title": "The Complete Skincare Gift Set",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/all-products.png"
        },
        {
            "id": 7,
            "title": "After Hours Recovery Oil",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/recovery-oil.png"
        },
        {
            "id": 45,
            "title": "Eye Depuffer",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/deflator.png"
        },
        {
            "id": 46,
            "title": "Hydrating Mist Spray",
            "image_url": "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/face-mist.png"
        }];
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
    </section>)
}
