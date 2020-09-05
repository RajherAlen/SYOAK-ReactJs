import React from "react";
import { Avatar } from "@material-ui/core";
import path from "./path.svg";

const ActivityCard = ({ time, title, name, text }) => {
  return (
    <div className="activity__card">
      <p className="text text--bold text--bold-dark"> {time} </p>
      <Avatar className="avatar">
        {" "}
        <img src={path} />{" "}
      </Avatar>
      <div className="text__wrap">
        <p className="text text--bold text--bold-dark"> {title} </p>
        <p className="text text--light text--light-grey"> {name} </p>
      </div>
      <p className="text text--bold text--bold-grey"> {text} </p>
    </div>
  );
};

export default ActivityCard;
