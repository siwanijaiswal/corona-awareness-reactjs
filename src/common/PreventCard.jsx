import React from "react";
import maskGroup from "../assets/mask-group.png";

const PreventCard = () => {
  return (
    <>
      <div className="prevent-corona-card">
        <div className="prevent-corona-card-image">
          <img src={maskGroup} alt="" />
        </div>
        <div className="prevent-corona-card-content">
          <h3>Stay At Home</h3>
          <p>
            Amet minim mollit non dese ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
      </div>
    </>
  );
};

export default PreventCard;
