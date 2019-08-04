import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, googleSignIn, ...otherProps }) => (
  <button
    className={` ${inverted ? "inverted" : ""} ${
      googleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
