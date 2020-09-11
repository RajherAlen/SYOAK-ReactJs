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
        <div>
          <h1 className="messages__row__description__info messages__row__description__info--bold text--bold-dark">
            {" "}
            {name}{" "}
          </h1>
          <p className="messages__row__description__info messages__row__description__info--light messages__row__description__info--light-grey">
            {" "}
            {text}{" "}
          </p>
        </div>
        {/* Text right */}
        <p className="messages__row__description__info messages__row__description__info--bold messages__row__description__info--bold-grey">
          {time}min
        </p>
      </div>
      {/* Text */}
    </div>
  );
};

export default Message;
