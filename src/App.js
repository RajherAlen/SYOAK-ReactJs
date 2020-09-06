import React from "react";
import "./styles/style.css";
import PriceStatistics from "./components/priceStatistics/PriceStatistics";
import SalesReport from "./components/salesReport/SalesReport";
import Messages from "./components/messages/Messages";
import OilGasProvider from "./components/oilGas/OilGasProvider";
import Activity from "./components/activity/Activity";
import Fuel from "./components/fuel/Fuel";

function App() {
  return (
    <div>
      {/* <PriceStatistics />
      <SalesReport />
      <Messages />
      <OilGasProvider /> 
      <Activity />*/}
      <Fuel />
    </div>
  );
}

export default App;
