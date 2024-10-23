import React from "react";
import HeaderImg from "../assets/header-person.png";
import Button from "./Button";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <section className="header-section">
          <div className="header-content">
            <p className="banner-top-para">covid-19 awareness</p>
            <h1 className="banner-header">stay safe. stay Home.</h1>
            <p className="common-para">
              Amet minim mollit non deserunt ullamco est sit do amet sint
              officia. Velit officia consequat duis enim velit mollit.
            </p>
            <Button className="header-desktop" buttonText="how to prevent" />
          </div>
          <div className="banner-image">
            <img src={HeaderImg} alt="header-person" />
          </div>
          <Button className="header-btn" buttonText="how to prevent" />
        </section>
      </header>
    </>
  );
};

export default Header;
