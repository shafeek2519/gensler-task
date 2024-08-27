import React, { useState } from "react";
import Header from "./components/header";
import Accordion from "./components/accordion";
import data from "./data";
import Modal from "./components/modal";
import "./styles.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isModalShow, setModalShow] = useState(false);

  const showModal = () => {
    setModalShow(true);
  };

  const cancelModal = () => {
    setModalShow(false);
  };

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1); //when click add to cart button it will add 1 from previous count in header cart
    cancelModal();
  };



  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <div className="main-content">
        <Accordion data={data} onAddToCart={showModal} />{" "}
        {/* getting accordion data & products data from data.js & displayed here*/}
        <Modal isShow={isModalShow} onCancel={cancelModal} onConfirm={handleAddToCart} />
      </div>
    </div>
  );
}

export default App;
