import React from "react";

const ShouldDoSection = ({ sectionClass, items, title }) => {
  return (
    <>
      <div className={sectionClass}>
        <p> {title} </p>
        {items.map((index, id) => {
          return (
            <div key={id}>
              <img src={index.img} alt="" /> <p>{index.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShouldDoSection;
