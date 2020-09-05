import React from "react";
import { Avatar } from "@material-ui/core";
import locationImg from "./location.svg";
import arrow from "./arrowDown.svg";

const ProviderCard = ({ name, location, color, backColor }) => {
  const avatarTitle = name.charAt(0);

  return (
    <div>
      <div className="provider__card">
        <Avatar
          className="avatar"
          style={{ color: color, background: backColor }}
        >
          {avatarTitle}
        </Avatar>
        <div className="card__text">
          <h1 className="text text--bold text--bold-dark"> {name} </h1>

          <div className="card__right">
            <p className="text text--light text--light-grey">
              <img src={locationImg} /> {location}
            </p>
            <img src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
