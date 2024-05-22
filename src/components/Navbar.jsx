// Navbar.jsx
import React, { useState } from "react";
import "../css/Navbar.css";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "./Modal";

function Navbar() {
  const { amount } = useSelector((state) => state.products);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="navbar__box">
      <div className="container">
        <div className="navbar">
          <div className="navbarLeft">
            <Link to="/">
              <img className="navLogo" src="./logo.svg" alt="logo" />
            </Link>
            <ul className="navList">
              <NavLinks className="navItem" />
            </ul>
          </div>
          <div className="navbarRight">
            <div className="amountWrapper" onClick={handleIconClick}>
              <img
                src="./icon-cart.svg"
                alt="cart-icon"
                className="navbarRight__icon"
              />
              <h3 className="prAmount">{amount}</h3>
            </div>
            <img
              src="./image-avatar.png"
              alt="avatar-img"
              className="navbarRight__avatar"
            />
          </div>
        </div>
        <div className="line"></div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default Navbar;
