import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import fuel from "./fuel.svg";
import greyDash from "./greyDash.svg";
import searchIcon from "./searchIcon.svg";
import searchWhite from "./searchWhite.svg";
import user from "./user.svg";
import stats from "./stats.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [dashboard, seDashboard] = useState(true);
  const [search, setSearch] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, [search, dashboard]);

  const activeDashboard = () => {
    seDashboard(!dashboard);
    setSearch(!search);
  };

  const activeSearch = () => {
    seDashboard(!dashboard);
    setSearch(!search);
  };

  return (
    <div className="sidebar">
      <img src={logo} className="sidebar__logo" />
      <Link to="/" onClick={() => activeDashboard()}>
        <div
          className={`sidebar__link ${
            url === "http://localhost:3000/" ? "sidebar__link--active" : ""
          } `}
        >
          <img src={url === "http://localhost:3000/" ? fuel : greyDash} />
        </div>
      </Link>
      <Link to="/search" onClick={() => activeSearch()}>
        <div
          className={`sidebar__link ${
            url === "http://localhost:3000/search"
              ? "sidebar__link--active"
              : ""
          } `}
        >
          <img
            src={
              url === "http://localhost:3000/search" ? searchWhite : searchIcon
            }
          />
        </div>
      </Link>
      <div className="sidebar__link">
        <img src={stats} />
      </div>
      <div className="sidebar__link">
        <img src={user} />
      </div>
    </div>
  );
};

export default SideBar;
