import React from "react";
import path from "./path.svg";

const ActivityRow = ({ time, title, name, text }) => {
  return (
    <div className="activity__row">
      <p className="activity__row__info activity__row__info--bold activity__row__info--bold--dark">
        {" "}
        {time}{" "}
      </p>
      <img src={path} />

      <div className="activity__row__wrap">
        <p className="activity__row__info activity__row__info--bold activity__row__info--bold--dark">
          {" "}
          {title}{" "}
        </p>
        <p className="activity__row__info activity__row__info--light activity__row__info--light--grey">
          {" "}
          {name}{" "}
        </p>
      </div>

      <p className="activity__row__info activity__row__info--bold activity__row__info--bold--grey">
        {" "}
        {text}{" "}
      </p>
    </div>
  );
};

export default ActivityRow;
