import React, { useState } from "react";
import arrowDown from "./img/arrowDown.svg";
import add from "./img/add.svg";
import filter from "./img/filter.svg";

const CRUDtop = () => {
  const [addFuel, setAddFuel] = useState(false);

  return (
    <div className="crud__header">
      <div className="crud__header__info">
        <p className="crud__header__info--title">DATALIST</p>
        <p className="crud__header__info--total">578 total</p>
        <p className="crud__header__info--sort crud__header__info--sort-dark">
          Sort by:
        </p>
        <p className="crud__header__info--sort crud__header__info--sort-grey">
          Fuel Type <img src={arrowDown} />
        </p>
      </div>

      <div className="crud__header__btns">
        <button className="crud__header__btns__btn crud__header__btns__btn--outline">
          <img src={filter} />
          Filter
        </button>
        <button
          className="crud__header__btns__btn crud__header__btns__btn--primary"
          onClick={() => setAddFuel(true)}
        >
          <img src={add} />
          Add Fuel
        </button>

        {/* ADD FUEL */}
        <div className={`add-fuel ${addFuel && "add-fuel--active"}`}>
          <p className="add-fuel__title">Add Fuel </p>
          <input
            type="text"
            placeholder="Provider Name"
            className="add-fuel__input"
          />
          <select className="add-fuel__input">
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
            className="add-fuel__input"
          />
          <div className="add-fuel__price">
            <p>Price: </p>

            <input
              type="number"
              placeholder="1"
              min="0"
              max="100"
              className="add-fuel__price__number"
            />

            <input
              type="number"
              placeholder="00"
              min="0"
              max="100"
              className="add-fuel__price__number"
            />
          </div>
          <div className="add-fuel__btns">
            <button className="add-fuel__btns__btn add-fuel__btns__btn--primary">
              Save Changes
            </button>
            <button className="add-fuel__btns__btn add-fuel__btns__btn--outline">
              Preview
            </button>
            <button
              className="add-fuel__btns__btn add-fuel__btns__btn--cancle"
              onClick={() => setAddFuel(false)}
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRUDtop;
