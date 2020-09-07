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
      <Link to="/">
        <div
          className={`sidebar__card ${
            url === "http://localhost:3000/" ? "sidebar__cardActive" : ""
          } `}
          onClick={() => activeDashboard()}
        >
          <img src={url === "http://localhost:3000/" ? fuel : greyDash} />
        </div>
      </Link>
      <Link to="/search">
        <div
          className={`sidebar__card ${
            url === "http://localhost:3000/search" ? "sidebar__cardActive" : ""
          } `}
          onClick={() => activeSearch()}
        >
          <img
            src={
              url === "http://localhost:3000/search" ? searchWhite : searchIcon
            }
          />
        </div>
      </Link>
      <div className="sidebar__card">
        <img src={stats} className="sidebar__stats" />
      </div>
      <img src={user} />
    </div>
  );
};

export default SideBar;
