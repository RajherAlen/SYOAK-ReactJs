import React from "react";

const SalesRow = ({ active, number, title, price, percentage }) => {
  return (
    <div className={`sales__row ${active && "sales__row--active"}`}>
      <p className="sales__row__index"> 0{number} </p>
      <div className="sales__row__content">
        <p className="sales__row__content__title"> {title} </p>
        <p className="sales__row__content_stats sales__row__content__stats--plus">
          ${price} (+{percentage}%)
        </p>
      </div>
    </div>
  );
};

export default SalesRow;
