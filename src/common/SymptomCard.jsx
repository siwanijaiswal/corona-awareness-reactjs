import React from "react";

const SymptomCard = ({ items }) => {
  return (
    <>
      <div className="symptoms-card">
        {items.map((index, id) => {
          return (
            <div className="symptoms-cards" key={id}>
              <img src={index.img} width="55px" height="55px" alt="" />
              <div className="symptoms-cards-contents">
                <h3>{index.heading}</h3>
                <p>{index.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SymptomCard;
