import React from "react";

const SalesRow = ({ active, number, title, price, percentage }) => {
  return (
    <div className={`sales__row ${active && "sales__row--active"}`}>
      <p className="sales__row__index"> 0{number} </p>
      <div className="sales__row__description">
        <p className="sales__row__description_title"> {title} </p>
        <p className="sales__row__description_statistics">
          ${price} (+{percentage}%)
        </p>
      </div>
    </div>
  );
};

export default SalesRow;
