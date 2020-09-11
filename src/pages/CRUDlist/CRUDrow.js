import React, { useState } from "react";
import dots from "./img/dots.svg";
import { Avatar } from "@material-ui/core";
import edit from "./img/edit.svg";
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
        <Avatar style={{ width: "35px", height: "35px" }} className="avatar">
          I
        </Avatar>
        <p className="crud__row__info__desc crud__row__info__desc--dark">
          {" "}
          {provider}{" "}
        </p>
      </div>

      <div className="crud__row__info crud__row__info--right">
        <p className="crud__row__info__desc crud__row__info__desc--light">
          {type}
        </p>
        <p className="crud__row__info__desc crud__row__info__desc--light ">
          {fuelName}
        </p>
        <p className="crud__row__info__desc crud__row__info__desc--dark crud__row__info__desc--dark-bold">
          {price}$
        </p>
        <p className="crud__row__info__desc crud__row__info__desc--light ">
          {" "}
          {dateCreated}
        </p>
      </div>

      <img
        src={dots}
        className="crud__row__img"
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
