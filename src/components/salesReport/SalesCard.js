import React from "react";

const SalesCard = ({ active, number, title, price, percentage }) => {
  return (
    <div className={`card ${active && "active"}`}>
      <p className="text text--bold-number"> 0{number} </p>
      <div className="card__right">
        <p className="text text--bold"> {title} </p>
        <p className="text text--light text--light-green">
          ${price} (+{percentage}%)
        </p>
      </div>
    </div>
  );
};

export default SalesCard;
