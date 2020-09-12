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
    <div className="statistics__header">
      {/* HEADER BODY */}
      <div className="statistics__header__body">
        <h2 className="statistics__header__body__title">Price Statistics</h2>

        <div className="statistics__header__body__graph">
          <div>
            <img src={line1} />
            <h4 className="statistics__header__body__graph__name statistics__header__body__graph__name--light">
              Q1
            </h4>
          </div>
          <div>
            <img src={line2} />
            <h4 className="statistics__header__body__graph__name statistics__header__body__graph__name--light">
              Q2
            </h4>
          </div>
          <div>
            <img src={line3} />
            <h4 className="statistics__header__body__graph__name statistics__header__body__graph__name--light">
              Q3
            </h4>
          </div>
          <div>
            <img src={line4} />
            <h4 className="statistics__header__body__graph__name statistics__header__body__graph__name--bold">
              2018
            </h4>
          </div>
          <div>
            <img src={line5} />
            <h4 className="statistics__header__body__graph__name statistics__header__body__graph__name--light">
              Q1
            </h4>
          </div>
          <div>
            <img src={line6} />
            <h4 className="statistics__header__body__graph__name statistics__header__body__graph__name--light">
              Q2
            </h4>
          </div>
          <div>
            <img src={line7} />
            <h4 className="statistics__header__body__graph__name statistics__header__body__graph__name--light">
              Q3
            </h4>
          </div>
        </div>
      </div>

      <img src={verticalLine} />

      {/* HEADER MEDIA */}
      <div className="statistics__header__media">
        <img src={fuelPump} />
        <p className="statistics__header__media__summary">
          Find the best gas prices in your state to maximize savings at the
          pump.
        </p>
        <button className="statistics__header__media_btn statistics__header__media_btn--primary">
          Find
        </button>
      </div>
    </div>
  );
};

export default StatisticsTop;
