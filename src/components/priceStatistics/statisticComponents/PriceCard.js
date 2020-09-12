import React from "react";
import arrowDown from "./img/arrowDown.svg";
import arrowUp from "./img/arrowUp.svg";
import { Avatar } from "@material-ui/core";

const PriceCard = ({ title, down, percentage, price, color, backColor }) => {
  const avatarTitle = title.charAt(0);

  return (
    <div className="statistics__row">
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

      <div className="statistics__desc">
        <div className="statistics__desc__flex">
          <h1 className="statistics__info  statistics__info--fuel-name">
            {" "}
            {title}{" "}
          </h1>
          <img src={down ? arrowDown : arrowUp} />
          <p
            className={`statistics__info  ${
              down
                ? "statistics__info statistics__info--stats statistics__info--stats--plus"
                : "statistics__info statistics__info--stats statistics__info--stats--minus"
            }`}
          >
            {down ? "-" : "+"} {percentage}%
          </p>
        </div>

        <p className="statistics__info statistics__info--stats statistics__info--stats--price">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default PriceCard;
