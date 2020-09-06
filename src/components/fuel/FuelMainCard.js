import React from "react";
import curve from "./curve.svg";
import line from "./line.svg";

const FuelMainCard = () => {
  return (
    <div className="fuel__mainCard">
      {/* BACK_CARD */}
      <div className="back__card"></div>

      {/* CARD_TEXT */}
      <div className="manCard__text">
        <p className="text__title">Diesel Fuel</p>
        <p className="text__price">$1.96</p>
        <p className="text__small">AVG PRICE</p>
      </div>

      {/* GRAPH */}
      <img src={curve} className="graph" />
      {/* LINE */}
      <img src={line} className="line" />
      {/* DATES */}
      <div className="fuel__dates">
        <p className="text__dates">JAN</p>
        <p className="text__dates">FEB</p>
        <p className="text__dates">NAR</p>
        <p className="text__dates">APR</p>
        <p className="text__dates">MAY</p>
        <p className="text__dates">JUN</p>
        <p className="text__dates">JUL</p>
      </div>
    </div>
  );
};

export default FuelMainCard;
