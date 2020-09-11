import React from "react";
import arrowDown from "./img/arrowDown.svg";
import arrowUp from "./img/arrowUp.svg";
import { Avatar } from "@material-ui/core";

const PriceCard = ({ title, down, percentage, price, color, backColor }) => {
  const avatarTitle = title.charAt(0);

  return (
    <div className="statistics__footer__item">
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

      <div className="statistics__footer__item__description">
        <div className="statistics__footer__item__description__head">
          <h1 className="statistics__footer__item__description__head__info statistics__footer__item__description__head__info--bold">
            {" "}
            {title}{" "}
          </h1>
          <img src={down ? arrowDown : arrowUp} />
          <p
            className={`statistics__footer__item__description__head__info ${
              down
                ? "statistics__footer__item__description__head__info--light-plus"
                : "statistics__footer__item__description__head__info--light-minus"
            }`}
          >
            {down ? "-" : "+"} {percentage}%
          </p>
        </div>

        <p className="statistics__footer__item__description__head__info statistics__footer__item__description__head__info--light-grey">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default PriceCard;
