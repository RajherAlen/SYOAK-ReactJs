import React from "react";
import "./styles/style.css";
import PriceStatistics from "./components/priceStatistics/PriceStatistics";
import SalesReport from "./components/salesReport/SalesReport";
import Messages from "./components/messages/Messages";
import OilGasProvider from "./components/oilGas/OilGasProvider";

function App() {
  return (
    <div>
      {/* <PriceStatistics />
      <SalesReport />
      <Messages /> */}
      <OilGasProvider />
    </div>
  );
}

export default App;
