import React from "react";
import line1 from "./img/line1.svg";
import line2 from "./img/line2.svg";
import line3 from "./img/line3.svg";
import line4 from "./img/line4.svg";
import line5 from "./img/line5.svg";
import line6 from "./img/line6.svg";
import line7 from "./img/line7.svg";
import fuelPump from "./img/fuelPump.svg";
import verticalLine from "./img/verticalLine.svg";

const StatisticsTop = () => {
  return (
    <div className="statistics__top">
      <div className="statistics__left">
        <h2 className="graph__title">Price Statistics</h2>
        <div className="graph__statistics">
          <div className="graph__line">
            <img src={line1} />
            <h4 className="text text--light-grey">Q1</h4>
          </div>
          <div className="graph__line">
            <img src={line2} />
            <h4 className="text text--light-grey">Q2</h4>
          </div>
          <div className="graph__line">
            <img src={line3} />
            <h4 className="text text--light-grey">Q3</h4>
          </div>
          <div className="graph__line">
            <img src={line4} />
            <h4 className="text text--bold">2018</h4>
          </div>
          <div className="graph__line">
            <img src={line5} />
            <h4 className="text text--light-grey">Q1</h4>
          </div>
          <div className="graph__line">
            <img src={line6} />
            <h4 className="text text--light-grey">Q2</h4>
          </div>
          <div className="graph__line">
            <img src={line7} />
            <h4 className="text text--light-grey">Q3</h4>
          </div>
        </div>
      </div>

      <img src={verticalLine} />

      <div className="statistics__right">
        <img src={fuelPump} />
        <p className="text">
          Find the best gas prices in your state to maximize savings at the
          pump.
        </p>
        <button className="btn">Find</button>
      </div>
    </div>
  );
};

export default StatisticsTop;
