import React from "react";
import "../styles.css";


const Modal = ({ isShow, onConfirm, onCancel }) => {
  if (!isShow) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Do you want to add this item to cart?</h3>
        <button className="modal-yes" onClick={onConfirm}>Yes</button>
        <button className="modal-no" onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default Modal;