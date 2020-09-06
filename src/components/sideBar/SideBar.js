import React from "react";
import logo from "./logo.svg";
import fuel from "./fuel.svg";
import searchIcon from "./searchIcon.svg";
import user from "./user.svg";
import stats from "./stats.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img src={logo} />
      <div className="sidebar__fuel">
        <img src={fuel} />
      </div>
      <img src={searchIcon} />
      <img src={stats} className="sidebar__stats" />
      <img src={user} />
    </div>
  );
};

export default SideBar;
