import React from "react";
import './styles/Product_card.css';


const ProductCard = (props) =>{
    const {title,price,imageUrl} = props;
    return(
         <div className="product-card">
           <img src={imageUrl} alt="" className="product-image"/>
           <p>{title}</p>
           <h4>{price}</h4>
         </div>
    )
}

export default ProductCard;