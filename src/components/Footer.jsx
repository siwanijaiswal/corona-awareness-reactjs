import React from "react";
import { quickLinks } from "../helpers/Statistics";
import FbImg from "../assets/Facebook.png";
import TwitterImg from "../assets/Twitter.png";
import InstaImg from "../assets/Instagram.png";
import YoutubeImg from "../assets/Youtube.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer-contact">
        <div className="about">
          <h3>About</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>

          <div className="about-icons">
            <img src={FbImg} alt="" />
            <img src={TwitterImg} alt="" />
            <img src={InstaImg} alt="" />
            <img src={YoutubeImg} alt="" />
          </div>
        </div>
        <div className="footer-links">
          {quickLinks.map((index, id) => {
            return (
              <div key={id}>
                <h3>{index.heading}</h3>
                <ul>
                  <li>{index.list1}</li>
                  <li>{index.list2}</li>
                  <li>{index.list3}</li>
                  <li>{index.list4}</li>
                  <li>{index.list5}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </footer>
    </>
  );
};

export default Footer;
