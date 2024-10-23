import React from "react";
import { statisticsNum } from "../helpers/Statistics";

const StatisticsCorona = () => {
  return (
    <>
      <section className="statistics" id="statistics">
        <div className="statistics-content">
          <h2 className="statistics-header">Coronavirus Statistics</h2>
          <p className="common-para">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className="statistics-case">
          {statisticsNum.map((stats, id) => {
            return (
              <div className="statistics-cases" key={id}>
                <img src={stats.img} alt="" />
                <p className="statistics-case-number">{stats.number}</p>
                <p className="statistics-case-para">{stats.scenario}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default StatisticsCorona;
