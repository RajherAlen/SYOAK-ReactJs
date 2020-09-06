import React from "react";
import { Avatar } from "@material-ui/core";
import search from "./search.svg";
import notification from "./notification.svg";
import avatarIcon from "./avatarIcon.svg";
import logo from "./logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <img src={logo} />
      </div>
      <div className="header__info">
        <div className="header__left">
          <img src={search} />
          <input type="text" className="header__input" placeholder="Search" />
        </div>

        <div className="header__right">
          <img src={notification} />
          <Avatar className="header__avatar" src={avatarIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
