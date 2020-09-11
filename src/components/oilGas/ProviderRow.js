import React from "react";
import { Avatar } from "@material-ui/core";
import locationImg from "./location.svg";
import arrow from "./arrowDown.svg";

const ProviderRow = ({ name, location, color, backColor }) => {
  const avatarTitle = name.charAt(0);

  return (
    <div className="provider__row">
      <Avatar
        className="avatar"
        style={{ color: color, background: backColor }}
      >
        {avatarTitle}
      </Avatar>
      <div className="provider__row__content">
        <h1 className="provider__row__content__name"> {name} </h1>

        <p className="provider__row__content__location">
          <img src={locationImg} /> {location}
        </p>

        <img src={arrow} />
      </div>
    </div>
  );
};

export default ProviderRow;
