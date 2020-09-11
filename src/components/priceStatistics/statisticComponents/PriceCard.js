import React from "react";
import arrowDown from "./img/arrowDown.svg";
import arrowUp from "./img/arrowUp.svg";
import { Avatar } from "@material-ui/core";

const PriceCard = ({ title, down, percentage, price, color, backColor }) => {
  const avatarTitle = title.charAt(0);

  return (
    <div className="statistics__footer_item">
      <Avatar
        style={{
          color: color,
          background: backColor,
          width: "35px",
          height: "35px",
        }}
      >
        {avatarTitle}
      </Avatar>
      <div className="card__text">
        <div className="text__top">
          <h1 className="text text--bold"> {title} </h1>
          <img src={down ? arrowDown : arrowUp} />
          <p
            className={`text ${down ? "text--light-green" : "text--light-red"}`}
          >
            {down ? "-" : "+"} {percentage}%
          </p>
        </div>
        <div>
          <p className="text text--light-grey">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
