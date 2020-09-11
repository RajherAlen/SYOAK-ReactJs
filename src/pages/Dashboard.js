import React from "react";
import PriceStatistics from "../components/priceStatistics/PriceStatistics";
import SalesReport from "../components/salesReport/SalesReport";
import Messages from "../components/messages/Messages";
import OilGasProvider from "../components/oilGas/OilGasProvider";
import Activity from "../components/activity/Activity";
import Fuel from "../components/fuel/Fuel";

const Dashboard = () => {
  return (
    <div className="dashboard__content">
      {/* APP MIDDLE LEFT */}
      <div className="dashboard__content__cards">
        <Fuel />
        <PriceStatistics />

        {/* APP MIDDLE LEFT BOTTOM */}
        <div className="dashboard__content__cards__row">
          <OilGasProvider />
          <Activity />
        </div>
      </div>

      {/* APP MIDDLE RIGHT */}
      <div>
        <SalesReport />
        <Messages />
      </div>
    </div>
  );
};

export default Dashboard;
