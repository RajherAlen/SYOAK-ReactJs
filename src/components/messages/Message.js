import React from "react";
import { Avatar } from "@material-ui/core";
import icon from "./icon.svg";
import online from "./online.svg";

const Message = ({ time, name, text, active }) => {
  return (
    <div className={`messages__row ${active && "messages__row--active"}`}>
      {/* Avatar Icon*/}
      <img src={icon} className="messages__row__icon" />

      <div className="messages__row__description">
        {/* Text wrap */}
        <div>
          <h1 className="messages__info messages__info--bold messages__info--bold--dark">
            {" "}
            {name}{" "}
          </h1>
          <p className="messages__info messages__info--light messages__info--light--grey">
            {" "}
            {text}{" "}
          </p>
        </div>
        {/* Time */}
        <p className="messages__info messages__info--bold messages__info--bold--grey">
          {time}min
        </p>
      </div>
    </div>
  );
};

export default Message;
