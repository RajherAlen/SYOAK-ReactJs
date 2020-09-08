import React, { useState } from "react";
import arrowDown from "./img/arrowDown.svg";
import add from "./img/add.svg";
import filter from "./img/filter.svg";

const CRUDtop = () => {
  const [addFuel, setAddFuel] = useState(false);

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
        <button className="btn btn--primary" onClick={() => setAddFuel(true)}>
          <img src={add} />
          Add Fuel
        </button>

        {/* ADD FUEL */}
        <div className={`addFuel ${addFuel && "active"}`}>
          <p className="text text--title">Add Fuel </p>
          <input
            type="text"
            placeholder="Provider Name"
            className="addFuel__input"
          />
          <select className="addFuel__input">
            <option value="fueltype" disabled selected>
              Fuel Type
            </option>
            <option value="autogas">Autogas</option>
            <option value="diesel">Diesel</option>
            <option value="gasoline">Gasoline</option>
          </select>
          <input
            type="text"
            placeholder="Fuel Name"
            className="addFuel__input"
          />
          <div className="addFuel__price">
            <p>Price: </p>

            <input
              type="number"
              placeholder="1"
              min="0"
              max="100"
              className="addFuel__number"
            />

            <input
              type="number"
              placeholder="00"
              min="0"
              max="100"
              className="addFuel__number"
            />
          </div>
          <div className="addFuell__btn">
            <button className="btn btn-primary">Save Changes</button>
            <button className="btn btn-outline">Preview</button>
            <button className="btn btn-red" onClick={() => setAddFuel(false)}>
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRUDtop;
