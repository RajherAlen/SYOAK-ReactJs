import React from "react";
import dots from "./img/dots.svg";
import { Avatar } from "@material-ui/core";

const CRUDcard = ({ provider, type, fuelName, price, dateCreated }) => {
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
      <img src={dots} className="dotsImg" />
    </div>
  );
};

export default CRUDcard;
