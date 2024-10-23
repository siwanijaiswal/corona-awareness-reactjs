import React from "react";
import PreventCard from "../common/PreventCard";
import Corona from "../common/Corona";
import Button from "./Button";

const PreventCorona = () => {
  return (
    <>
      <section className="prevent-corona">
        <div className="prevent-corona-items">
          <div className="prevent-corona-card-first">
            <PreventCard />
            <PreventCard />
          </div>
          <div className="prevent-corona-card-second">
            <PreventCard />
            <PreventCard />
          </div>
        </div>
        <div class="prevent-corona-content">
          <Corona
            headingText="How to prevent Coronavirus?"
            paraText1="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation"
          />
          <Button className="common-btn" buttonText="Read More" />
        </div>
      </section>
    </>
  );
};

export default PreventCorona;
