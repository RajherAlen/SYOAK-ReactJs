import React from "react";

const SalesRow = ({ active, number, title, price, percentage }) => {
  return (
    <div
      className={` sales__list-row ${active ? "sales__list-row--active" : ""}`}
    >
      <p className="sales__info--index"> 0{number} </p>
      <p className="sales__info--name"> {title} </p>
      <p className="sales__info--stats sales__info--stats--plus">
        ${price} (+{percentage}%)
      </p>
    </div>
  );
};

export default SalesRow;
