import React from "react";
import './styles/Footer.css';
import {BsShop,BsCart3} from "react-icons/bs";
import {BsGift,BsPerson} from 'react-icons/bs';


function Footer(){
    return(
        <div className="Footer">
            <div className="bottom-nav">
                <span>
                    <BsShop className="icon"/>
                    <p>STORE</p>
                </span>
                <span>
                    <BsCart3 className="icon"/>
                    <p>CART</p>
                </span>
                <span>
                    <BsGift className="icon"/> 
                    <p>OFFERS</p>
                </span>
                <span>
                    <BsPerson className="icon"/>
                    <p>ACCOUNT</p>
                </span>
            </div>
        </div>
    )
}

export default Footer;