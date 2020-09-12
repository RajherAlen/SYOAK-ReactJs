import React, { useState } from "react";
import arrowDown from "./img/arrowDown.svg";
import add from "./img/add.svg";
import filter from "./img/filter.svg";

const CRUDtop = () => {
  const [addFuel, setAddFuel] = useState(false);

  return (
    <div className="crud__header">
      <div className="crud__header-info">
        <p className="crud__header-info--title">DATALIST</p>
        <p className="crud__header-info--total">578 total</p>
        <p className="crud__header-info--sort crud__header-info--sort--dark">
          Sort by:
        </p>
        <p className="crud__header-info--sort crud__header-info--sort--light">
          Fuel Type <img src={arrowDown} />
        </p>
      </div>

      <div className="crud__header-btns">
        <button className="crud__header-btns__btn crud__header-btns__btn--outline">
          <img src={filter} />
          Filter
        </button>
        <button
          className="crud__header-btns__btn crud__header-btns__btn--primary"
          onClick={() => setAddFuel(true)}
        >
          <img src={add} />
          Add Fuel
        </button>
      </div>

      {/* ADD FUEL */}
      <div className={`crud__add-fuel ${addFuel && "crud__add-fuel--active"}`}>
        <p className="crud__add-fuel__title">Add Fuel </p>
        <input
          type="text"
          placeholder="Provider Name"
          className="crud__add-fuel__input crud__add-fuel__input--lrg"
        />
        <select className="crud__add-fuel__input crud__add-fuel__input--lrg">
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
          className="crud__add-fuel__input  crud__add-fuel__input--lrg"
        />

        <div className=" crud__add-fuel__input--price">
          <p>Price: </p>

          <input
            type="number"
            placeholder="1"
            min="0"
            max="100"
            className="crud__add-fuel__input crud__add-fuel__input--sml"
          />

          <input
            type="number"
            placeholder="00"
            min="0"
            max="100"
            className="crud__add-fuel__input crud__add-fuel__input--sml"
          />
        </div>
        <div className="crud__add-fuel__btns">
          <button className="crud__add-fuel__btns__btn crud__add-fuel__btns__btn--primary">
            Save Changes
          </button>
          <button className="crud__add-fuel__btns__btn crud__add-fuel__btns__btn--outline">
            Preview
          </button>
          <button
            className="crud__add-fuel__btns__btn crud__add-fuel__btns__btn--cancle"
            onClick={() => setAddFuel(false)}
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default CRUDtop;
