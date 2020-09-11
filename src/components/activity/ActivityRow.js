import React from "react";
import { Avatar } from "@material-ui/core";
import path from "./path.svg";

const ActivityRow = ({ time, title, name, text }) => {
  return (
    <div className="activity__row">
      <p className="activity__row__info activity__row__info--bold"> {time} </p>
      <Avatar className="avatar">
        {" "}
        <img src={path} />{" "}
      </Avatar>
      <div className="activity__row__wrap">
        <p className="activity__row__info activity__row__info--bold activity__row__info--bold-dark">
          {" "}
          {title}{" "}
        </p>
        <p className="activity__row__info activity__row__info--light">
          {" "}
          {name}{" "}
        </p>
      </div>
      <p className="activity__row__info activity__row__info--bold activity__row__info--bold-light">
        {" "}
        {text}{" "}
      </p>
    </div>
  );
};

export default ActivityRow;
