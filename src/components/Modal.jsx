import React from "react";
import "../css/Modal.css";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, clearCart } from "../features/productsSlice";

function Modal({ isOpen, onClose }) {
  const { amount, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    onClose(); 
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="closeWrapper">
          <h3>Cart</h3>
          <button className="close-button" onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className="modalLine"></div>
        {amount === 0 ? (
          <h4 className="empty">Your cart is empty.</h4>
        ) : (
          products.map((product) => (
            <div key={product.id} className="cartProduct">
              <img className="productImg1" src={product.img} alt="Product" />
              <div className="cartProductItem">
                <h4 className="cartProductTitle">
                  Fall Limited Edition Sneakers
                </h4>
                <h5 className="cartProductPrice">
                  $125.00 x {product.amount}
                  <span>${125 * product.amount}.00</span>
                </h5>
              </div>
              <button
                className="deleteBtn"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <img src="./icon-delete.svg" alt="Delete" />
              </button>
            </div>
          ))
        )}
        <button onClick={handleCheckout} className="checkoutBtn">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Modal;
