import React from "react";
import curve from "./curve.svg";
import line from "./line.svg";

const FuelMainCard = () => {
  return (
    <div className="fuel__main-card">
      {/* BACK_CARD */}
      <div className=" fuel__main-card--back"></div>

      {/* CARD_TEXT */}
      <div className="fuel__main-card__content">
        <p className="fuel__info--title">Diesel Fuel</p>
        <p className="fuel__info--price fuel__info--price--lrg">$1.96</p>
        <p className="fuel__info--tiny-main">AVG PRICE</p>
      </div>

      {/* GRAPH */}
      <img src={curve} className="fuel__main-card__graph" />

      {/* LINE */}
      <img src={line} />

      {/* DATES */}
      <div className="fuel__main-card__dates">
        <p>JAN</p>
        <p>FEB</p>
        <p>NAR</p>
        <p>APR</p>
        <p>MAY</p>
        <p>JUN</p>
        <p>JUL</p>
      </div>
    </div>
  );
};

export default FuelMainCard;
