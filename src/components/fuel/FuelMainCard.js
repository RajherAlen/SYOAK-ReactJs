import React from "react";
import curve from "./curve.svg";
import line from "./line.svg";

const FuelMainCard = () => {
  return (
    <div className="fuel__mainCard">
      {/* BACK_CARD */}
      <div className="fuel__mainCard--back"></div>

      {/* CARD_TEXT */}
      <div className="fuel__mainCard__content">
        <p className="fuel__mainCard__content--title">Diesel Fuel</p>
        <p className="fuel__mainCard__content--price">$1.96</p>
        <p className="fuel__mainCard__content--tiny">AVG PRICE</p>
      </div>

      {/* GRAPH */}
      <img src={curve} className="fuel__mainCard__graph" />

      {/* LINE */}
      <img src={line} />

      {/* DATES */}
      <div className="fuel__mainCard__dates">
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
