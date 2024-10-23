import React from "react";
import AboutCorona from "./AboutCorona.jsx";
import PreventCorona from "./PreventCorona.jsx";
import Protection from "./Protection.jsx";
import Symptoms from "./Symptoms.jsx";
import NewsArticles from "./NewsArticles.jsx";
import StatisticsCorona from "./StatisticsCorona.jsx";
import CoronaSteps from "./CoronaSteps.jsx";
import "../styles/Main.css";

const Main = () => {
  return (
    <>
      <StatisticsCorona />
      <AboutCorona />
      <CoronaSteps />
      <PreventCorona />
      <Protection />
      <Symptoms />
      <NewsArticles />
    </>
  );
};

export default Main;
