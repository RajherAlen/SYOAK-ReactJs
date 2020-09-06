import React from "react";
import "./styles/style.css";
import PriceStatistics from "./components/priceStatistics/PriceStatistics";
import SalesReport from "./components/salesReport/SalesReport";
import Messages from "./components/messages/Messages";
import OilGasProvider from "./components/oilGas/OilGasProvider";
import Activity from "./components/activity/Activity";
import Fuel from "./components/fuel/Fuel";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import hrLine from "./hrLine.svg";

function App() {
  return (
    <div className="app">
      {/* 
      <PriceStatistics />
      <SalesReport />
     
      <OilGasProvider />
      <Activity />
       */}
      <img src={hrLine} className="hrLine" />

      <div className="header__sidebar">
        <SideBar />
        <div className="app__top">
          <Header />

          <div className="app__middle">
            <div className="app__left">
              <Fuel />
              <PriceStatistics />

              <div className="app__bottom">
                <OilGasProvider />
                <Activity />
              </div>
            </div>
            <div>
              <SalesReport />
              <Messages />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
