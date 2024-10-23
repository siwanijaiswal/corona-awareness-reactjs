import React from "react";
import ShouldDoSection from "../common/ShouldDoSection";
import { shouldDo } from "../helpers/Statistics";
import { shouldAvoid } from "../helpers/Statistics";
import protectYourself from "../assets/protect-yourself.png";

const Protection = () => {
  return (
    <>
      <section className="protect-yourself">
        <div className="protect-yourself-header">
          <h2>How to protect yourself</h2>
          <p>
            {" "}
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{" "}
          </p>
        </div>
        <div class="protect-yourself-content">
          <div class="protect-yourself-contents">
            <ShouldDoSection
              sectionClass="first first-should-do"
              title="You should do"
              items={shouldDo}
            />
            <ShouldDoSection
              sectionClass="first second-should-do"
              title="You should avoid"
              items={shouldAvoid}
            />
          </div>

          <div className="img-container">
            <img src={protectYourself} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Protection;
