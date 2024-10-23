import React from "react";
import { coronaList } from "../helpers/Statistics";
import "../styles/Corona.css";

const Corona = ({ headingText, paraText1, paraText2 }) => {
  return (
    <>
      <h2 className="corona-virus-content-header">{headingText}</h2>
      <p className="common-para">{paraText1}</p>
      <p className="common-para" style={{ marginTop: "1rem" }}>
        {" "}
        {paraText2}
      </p>
      <ul>
        {coronaList.map((index, id) => {
          return (
            <li key={id}>
              <span>
                <img src={index.img} alt="" />
              </span>
              <p>{index.para} </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Corona;
