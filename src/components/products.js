import React from "react";
import "../styles.css";

const Products = ({ title, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    <div className="products">
      <h2 className="pro-title">{title}</h2>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {/* when click this button it will add a cart count in header */}
    </div>
  );
};

export default Products;
