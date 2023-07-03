import React from "react";
import './styles/Header.css';
import {RiMenu2Fill} from 'react-icons/ri';
import {BsCart3} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';

function Header(){
    return(
        <div className="Header">
            <div className="top-banner">
                <p>FREE HOME DELIVERY</p>
                <TbTruckDelivery size="20px"/>
                </div>
          <nav>
            {/* <RiMenu2Fill className="menu-icon"/> */}
            <div className="logo">
                <a href="/">
                    <img src={require('../assets/logo.jpg')} alt="saideep supermart"/>
                </a>
            </div>
            <BsCart3 className="cart-icon"/>
          </nav>
          <div className="search-bar">
            <input type="search" placeholder="Search for Products.."></input>
          </div>
        </div>
    )
}

export default Header;

// <div class="form-group has-search">
//             <span class="fa fa-search form-control-feedback"></span>
//             <input type="text" class="form-control" placeholder="Search"></input>
//           </div>