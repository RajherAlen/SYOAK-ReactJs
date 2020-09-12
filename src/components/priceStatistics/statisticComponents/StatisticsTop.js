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
      <div className="statistics__header__content">
        <h2 className="statistics__info statistics__info--title">
          Price Statistics
        </h2>

        <div className="statistics__graph-content">
          <div>
            <img src={line1} />
            <h4 className="statistics__info statistics__info--graph-name statistics__info--graph-name--light">
              Q1
            </h4>
          </div>
          <div>
            <img src={line2} />
            <h4 className="statistics__info statistics__info--graph-name statistics__info--graph-name--light">
              Q2
            </h4>
          </div>
          <div>
            <img src={line3} />
            <h4 className="statistics__info statistics__info--graph-name statistics__info--graph-name--light">
              Q3
            </h4>
          </div>
          <div>
            <img src={line4} />
            <h4 className="statistics__info statistics__info--graph-name statistics__info--graph-name--bold">
              2018
            </h4>
          </div>
          <div>
            <img src={line5} />
            <h4 className="statistics__info statistics__info--graph-name statistics__info--graph-name--light">
              Q1
            </h4>
          </div>
          <div>
            <img src={line6} />
            <h4 className="statistics__info statistics__info--graph-name statistics__info--graph-name--light">
              Q2
            </h4>
          </div>
          <div>
            <img src={line7} />
            <h4 className="statistics__info statistics__info--graph-name statistics__info--graph-name--light">
              Q3
            </h4>
          </div>
        </div>
      </div>

      <img src={verticalLine} />

      {/* HEADER MEDIA */}
      <div className="statistics__media-content">
        <img src={fuelPump} />
        <p className="statistics__media-content__summary">
          Find the best gas prices in your state to maximize savings at the
          pump.
        </p>
        <button className="statistics__media-content__btn statistics__media-content__btn--primary">
          Find
        </button>
      </div>
    </div>
  );
};

export default StatisticsTop;
