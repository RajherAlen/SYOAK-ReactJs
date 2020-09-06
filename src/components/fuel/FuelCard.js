import React from "react";
import arrowDown from "./arrowDown.svg";
import arrowUp from "./arrowUp.svg";

const FuelCard = ({ percentage, name, price, down }) => {
  return (
    <div className="fuel__card">
      <p className="text__title"> {name} </p>
      <p className="fuel__price">${price}</p>
      <p className="fuel__smalltext">AVG PRICE</p>
      <p className={`fuel__percentage ${down ? "text-green" : "text-red"} `}>
        <img src={down ? arrowDown : arrowUp} /> {down ? "-" : "+"}
        {percentage}%
      </p>
    </div>
  );
};

export default FuelCard;
