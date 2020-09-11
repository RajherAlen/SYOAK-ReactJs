import React from "react";
import { Avatar } from "@material-ui/core";
import icon from "./icon.svg";
import online from "./online.svg";

const Message = ({ time, name, text, active }) => {
  return (
    <div className={`messages__row ${active && "messages__row--active"}`}>
      {/* Avatar */}
      <img src={icon} className="messages__row__icon" />
      {/* Text */}
      <div className="messages__row__description">
        {/* Text left */}
        <div className="text__left">
          <h1 className="text text--bold text--bold-dark"> {name} </h1>
          <p className="text text--light text--light-grey"> {text} </p>
        </div>
        {/* Text right */}
        <p className="text text--bold text--bold-grey">{time}min</p>
      </div>
      {/* Text */}
    </div>
  );
};

export default Message;
