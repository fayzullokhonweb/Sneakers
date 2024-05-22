import React from "react";
import "../css/Modal.css";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../features/productsSlice";

function Modal({ isOpen, onClose }) {
  const { amount, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Cart</h2>
        <button className="close-button" onClick={onClose}>
          <IoClose />
        </button>
      </div>
      <div className="modalLine"></div>

      {/* <h4>Your cart is empty.</h4> */}
      <div className="cartProduct">
        <img className="productImg1" src="/image-product-1.jpg" alt="" />
        <div className="cartProductItem">
          <h4 className="cartProductTitle">Fall Limited Edition Sneakers</h4>
          <h5 className="cartProductPrice">
            ${125}x{amount} <span>${125 * amount} </span>
          </h5>
        </div>
        <button className="deleteBtn">
          <img src="./icon-delete.svg" alt="" />
        </button>
      </div>
      <button
        onClick={dispatch(removeProduct(products.id))}
        className="checkoutBtn"
      >
        checkout
      </button>
    </div>
  );
}

export default Modal;
