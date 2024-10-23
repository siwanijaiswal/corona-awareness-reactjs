import React from "react";
import { coronaSteps } from "../helpers/Statistics";

const CoronaSteps = () => {
  return (
    <>
      <section className="corona-steps">
        {coronaSteps.map((index, id) => {
          return (
            <div>
              <img src={index.logo} alt="" />
              <div>
                <h2>{index.heading}</h2>
                <p> {index.para}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default CoronaSteps;
