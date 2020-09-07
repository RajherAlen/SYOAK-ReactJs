import React from "react";
import "./styles/style.css";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import hrLine from "./hrLine.svg";
import Dashboard from "./pages/Dashboard";
import { Route, Switch } from "react-router-dom";
import CRUDlist from "./pages/CRUDlist/CRUDlist";

function App() {
  return (
    <div className="app">
      <img src={hrLine} className="hrLine" />

      <div className="dashboard">
        <SideBar />
        <div className="dashboard__top">
          <Header />
          <Switch>
            <Route path="/search" component={CRUDlist} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
