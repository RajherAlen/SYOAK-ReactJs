import React from "react";
import search from "./search.svg";
import notification from "./notification.svg";
import avatarIcon from "./avatarIcon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__search-form">
        <img src={search} />
        <input
          type="text"
          className="header__search-form__input"
          placeholder="Search"
        />
      </div>

      <div className="header__notification">
        <img src={notification} />
        <img src={avatarIcon} />
      </div>
    </header>
  );
};

export default Header;
