import React from "react";
import StatisticBottom from "./statisticComponents/StatisticBottom";
import Graph from "./statisticComponents/StatisticsTop";

const PriceStatistics = () => {
  return (
    <div className="price__statistics">
      <Graph />
      <StatisticBottom />
    </div>
  );
};

export default PriceStatistics;
