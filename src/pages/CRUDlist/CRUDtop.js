import React from "react";
import arrowDown from "./img/arrowDown.svg";
import add from "./img/add.svg";
import filter from "./img/filter.svg";

const CRUDtop = () => {
  return (
    <div className="crud__top">
      <div className="crud__top-left">
        <p className="crud__title">DATALIST</p>
        <p className="crud__text-total">578 total</p>
        <p className="text text-dark">Sort by:</p>
        <p className="text text-grey">
          Fuel Type <img src={arrowDown} />
        </p>
      </div>

      <div className="crud__top-right">
        <button className="btn btn--outline">
          <img src={filter} />
          Filter
        </button>
        <button className="btn btn--primary">
          <img src={add} />
          Add Fuel
        </button>
      </div>
    </div>
  );
};

export default CRUDtop;
