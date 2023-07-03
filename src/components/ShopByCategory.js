import React from "react";
import "./styles/ShopByCategory.css";

function ShopByCategory(){
    return(
         <div className="shop-by-category">
            <div className="heading">
            <h2>Shop  by category</h2>
            <a href="/">SEE ALL</a>
            </div>
            <div className="category-grid">
                <img src="https://ik.imagekit.io/eztaheq5g/saideep_superstore_demo/1.jpg?updatedAt=1688410784665" alt="Food Grains,Oils,Masalas"/>
                <img src="https://ik.imagekit.io/eztaheq5g/saideep_superstore_demo/6.jpg?updatedAt=1688410784735" alt="Food Grains,Oils,Masalas"/>
                <img src="https://ik.imagekit.io/eztaheq5g/saideep_superstore_demo/5.jpg?updatedAt=1688410784718" alt="Food Grains,Oils,Masalas"/>
                <img src="https://ik.imagekit.io/eztaheq5g/saideep_superstore_demo/7.jpg?updatedAt=1688410784751" alt="Food Grains,Oils,Masalas"/>
                <img src="https://ik.imagekit.io/eztaheq5g/saideep_superstore_demo/4.jpg?updatedAt=1688411045310" alt="Food Grains,Oils,Masalas"/>
                <img src="https://ik.imagekit.io/eztaheq5g/saideep_superstore_demo/8.jpg?updatedAt=1688411045277" alt="Food Grains,Oils,Masalas"/>
            </div>
         </div>
    )
}


export default ShopByCategory;