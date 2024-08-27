import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../styles.css";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="logo">Bengaluru eShopping</div>
      <div className="cart">
        <FaShoppingCart size={24} />
        <h5 className="cart-text">Cart</h5>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
