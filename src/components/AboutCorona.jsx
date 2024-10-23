import React from "react";
import Corona from "../common/Corona";
import Button from "./Button";
import ladyImg from "../assets/lady-mask.png";
import manImg from "../assets/man-mask.png";
import youtubePlay from "../assets/youtubePlay.png";

const AboutCorona = () => {
  return (
    <>
      <section id="about-corona">
        <div className="corona-virus">
          <div className="corona-virus-images">
            <img className="lady-mask" src={ladyImg} alt="" />
            <img className="youtubePlay" src={youtubePlay} alt="" />
          </div>
          <div className="corona-virus-content">
            <Corona
              headingText="What is coronavirus?"
              paraText1="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation"
            />
            <Button className="common-btn" buttonText="how to prevent" />
          </div>
        </div>
      </section>

      <section>
        <div className="corona-virus">
          <div className="corona-virus-content">
            <Corona
              headingText="Why is it Dangerous?"
              paraText1="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation"
            />
            <Button className="common-btn" buttonText="how to prevent" />
          </div>

          <div className="corona-virus-images">
            <img className="lady-mask" src={manImg} alt="" />
            <img className="youtubePlay" src={youtubePlay} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCorona;
