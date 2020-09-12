import React from "react";
import { Avatar } from "@material-ui/core";
import locationImg from "./location.svg";
import arrow from "./arrowDown.svg";

const ProviderRow = ({ name, location, color, backColor }) => {
  const avatarTitle = name.charAt(0);

  return (
    <div className="oil-gas__row">
      <Avatar
        className="oil-gas__info oil-gas__info--avatar"
        style={{ color: color, background: backColor }}
      >
        {avatarTitle}
      </Avatar>

      <h1 className="oil-gas__info oil-gas__info--name"> {name} </h1>

      <p className="oil-gas__info oil-gas__info--location">
        <img src={locationImg} className="oil-gas__info--location--icon" />{" "}
        {location}
      </p>

      <img src={arrow} className="oil-gas__info--arrow" />
    </div>
  );
};

export default ProviderRow;
