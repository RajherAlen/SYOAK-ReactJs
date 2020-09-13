import React, { useState } from "react";
import dots from "./img/dots.svg";
import edit from "./img/edit.svg";
import avatar from "./img/avatar.svg";
import remove from "./img/remove.svg";
import duplicate from "./img/duplicate.svg";

const CRUDrow = ({ provider, type, fuelName, price, dateCreated, id }) => {
  const [crud, setCrud] = useState(false);

  const handleActiveEdit = () => {
    setCrud(!crud);
  };

  return (
    <div className="crud__row">
      <div className="crud__row__info crud__row__info--provider">
        <input type="checkbox" />
        <img src={avatar} className="crud__row__avatar-img" />
        <p className="crud__content__info-row crud__content__info-row--light-dark">
          {" "}
          {provider}{" "}
        </p>
      </div>

      <div className="crud__row__info crud__row__info--desc">
        <p className="crud__content__info-row crud__content__info-row--light-grey">
          {type}
        </p>
        <p className="crud__content__info-row crud__content__info-row--light-grey ">
          {fuelName}
        </p>
        <p className="crud__content__info-row crud__content__info-row--bold-dark">
          {price}$
        </p>
        <p className="crud__content__info-row crud__content__info-row--light-grey ">
          {" "}
          {dateCreated}
        </p>
      </div>

      <img
        src={dots}
        className="crud__row__dots-img"
        onClick={() => handleActiveEdit()}
        style={{ cursor: "pointer" }}
      />

      <div className={`crud__row__edit ${crud && "crud__row__edit--active"} `}>
        <p className="crud__row__edit__method">
          <img src={edit} className="crud__row__edit__icon" /> Edit Data
        </p>
        <p className="crud__row__edit__method">
          <img src={remove} className="crud__row__edit__icon" /> Remove Data
        </p>
        <p className="crud__row__edit__method">
          <img src={duplicate} className="crud__row__edit__icon" /> Duplicate
          Data
        </p>
      </div>
    </div>
  );
};

export default CRUDrow;
