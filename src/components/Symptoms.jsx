import React from "react";
import Button from "./Button";
import SymptomCard from "../common/SymptomCard.jsx";
import { symptomsItems } from "../helpers/Statistics.js";

const Symptoms = () => {
  return (
    <>
      <section className="corona-symptoms" id="symptoms">
        <div className="corona-symptoms-header">
          <h2>Symtoms of coronavirus</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Amet minim mollit non deserunt
          </p>
        </div>
        <SymptomCard items={symptomsItems} />
        <div className="corona-symptoms-footer">
          <p>
            <span style={{ color: "rgba(111, 66, 193, 1)" }}>
              Stay at home and call your doctor:
            </span>
            Amet minim mollit non deserunt ullam est sit aliqua dolor do amet
            sint.
          </p>
          <Button className="common-btn" buttonText="HELPLINE" />
        </div>
      </section>
    </>
  );
};

export default Symptoms;
