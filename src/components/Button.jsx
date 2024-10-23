import React from "react";
import "../styles/Button.css";

const Button = ({ buttonText, className }) => {
  return (
    <>
      <button className={className}>{buttonText}</button>
    </>
  );
};

export default Button;
