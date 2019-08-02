import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to={`/shop`}>
        <img
          className="logo-container"
          src="https://res.cloudinary.com/rps-technologies/image/upload/v1564472149/onlinelogomaker-073019-1303-8865-2000-transparent.png"
          alt="saint gobain"
        />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        <Link className="option" to="/contact">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
