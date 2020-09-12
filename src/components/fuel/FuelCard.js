import React from "react";
import arrowDown from "./arrowDown.svg";
import arrowUp from "./arrowUp.svg";

const FuelCard = ({ percentage, name, price, down }) => {
  return (
    <div className="fuel__card">
      <p className="fuel__info fuel__info--title"> {name} </p>
      <p className="fuel__info--price fuel__info--price--sml">${price}</p>
      <p className="fuel__info fuel__info--tiny">AVG PRICE</p>
      <p
        className={`fuel__info ${
          down ? "fuel__info--stats--plus" : "fuel__info--stats--minus"
        } `}
      >
        <img src={down ? arrowDown : arrowUp} /> {down ? "-" : "+"}
        {percentage}%
      </p>
    </div>
  );
};

export default FuelCard;
