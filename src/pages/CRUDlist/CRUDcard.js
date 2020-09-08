import React, { useState } from "react";
import dots from "./img/dots.svg";
import { Avatar } from "@material-ui/core";
import edit from "./img/edit.svg";
import remove from "./img/remove.svg";
import duplicate from "./img/duplicate.svg";

const CRUDcard = ({ provider, type, fuelName, price, dateCreated, id }) => {
  const [crud, setCrud] = useState(false);

  const handleActiveEdit = () => {
    setCrud(!crud);
  };

  return (
    <div className="crud__card">
      <div className="card card-left">
        <input type="checkbox" />
        <Avatar style={{ width: "35px", height: "35px" }} className="avatar">
          I
        </Avatar>
        <p className="text text--dark"> {provider} </p>
      </div>
      <div className="card card-right">
        <p className="text text--light">{type}</p>
        <p className="text text--light ">{fuelName}</p>
        <p className="text text--dark text--dark-bold">{price}$</p>
        <p className="text text--light "> {dateCreated}</p>
      </div>
      <img
        src={dots}
        className="dotsImg"
        onClick={() => handleActiveEdit()}
        style={{ cursor: "pointer" }}
      />
      <div className={`crud__edit ${crud && "active"} `}>
        <p>
          <img src={edit} /> Edit Data
        </p>
        <p>
          <img src={remove} /> Remove Data
        </p>
        <p>
          <img src={duplicate} /> Duplicate Data
        </p>
      </div>
    </div>
  );
};

export default CRUDcard;
