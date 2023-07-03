import React, { Children } from "react";
import './styles/Latest_products.css';
import ProductCard from "./Product_card";

function LatestProducts(){
    return(
        <div className="latest-products">
            <h2>Latest Products</h2>
            <div className="latest-products-collection">
            <ProductCard
                title="Red 490g Kissan Mango Jam"
                price="₹90.00"
                imageUrl="https://5.imimg.com/data5/SELLER/Default/2022/11/DM/KB/AV/71871662/61d63saqndl-sl1000--500x500.jpg"
            />

            <ProductCard
                title="Red 490g Kissan Mango Jam"
                price="₹90.00"
                imageUrl="https://5.imimg.com/data5/SELLER/Default/2022/11/DM/KB/AV/71871662/61d63saqndl-sl1000--500x500.jpg"
            />

            <ProductCard
                title="Red 490g Kissan Mango Jam"
                price="₹90.00"
                imageUrl="https://5.imimg.com/data5/SELLER/Default/2022/11/DM/KB/AV/71871662/61d63saqndl-sl1000--500x500.jpg"
            />

            <ProductCard
                title="Red 490g Kissan Mango Jam"
                price="₹90.00"
                imageUrl="https://5.imimg.com/data5/SELLER/Default/2022/11/DM/KB/AV/71871662/61d63saqndl-sl1000--500x500.jpg"
            />
            </div>
          
        </div>
    )
}

export default LatestProducts;