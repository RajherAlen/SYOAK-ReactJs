import React from "react";
import arrowDown from "./arrowDown.svg";
import arrowUp from "./arrowUp.svg";

const FuelCard = ({ percentage, name, price, down }) => {
  return (
    <div className="fuel__card">
      <p className="fuel__card--title"> {name} </p>
      <p className="fuel__card--price">${price}</p>
      <p className="fuel__card--tiny">AVG PRICE</p>
      <p
        className={`fuel__card--statistic ${
          down ? "fuel__card--statistic-plus" : "fuel__card--statistic-minus"
        } `}
      >
        <img src={down ? arrowDown : arrowUp} /> {down ? "-" : "+"}
        {percentage}%
      </p>
    </div>
  );
};

export default FuelCard;
