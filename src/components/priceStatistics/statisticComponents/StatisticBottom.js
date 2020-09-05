import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import PriceCard from "./PriceCard";

const StatisticBottom = () => {
  const [statistic, setStatistic] = useState([
    {
      down: true,
      title: "Chevron",
      percentage: 6,
      price: "1.80",
      color: "#4596D1",
      backColor: "rgba(69, 150, 209, 0.5)",
    },
    {
      down: false,
      title: "Shell",
      percentage: 11,
      price: "1.92",
      color: "#FF5151",
      backColor: "rgba(255, 81, 81, 0.5)",
    },
    {
      down: false,
      title: "Total",
      percentage: 6,
      price: "1.88",
      color: "#FFB547",
      backColor: "rgba(255, 181, 71, 0.5)",
    },
    {
      down: true,
      title: "Ina",
      percentage: 2,
      price: "1.85",
      color: "#0052B4",
      backColor: "rgba(0, 82, 180, 0.5)",
    },
  ]);

  return (
    <div className="statistics__bottom">
      {statistic.map((card, index) => (
        <PriceCard
          key={index}
          down={card.down}
          title={card.title}
          percentage={card.percentage}
          price={card.price}
          color={card.color}
          backColor={card.backColor}
        />
      ))}
      <Avatar
        style={{
          width: "25px",
          height: "25px",
          fontSize: "13px",
          color: "#E86F1B",
          background: "rgba(232, 111, 27, 0.5)",
        }}
      >
        R
      </Avatar>
    </div>
  );
};

export default StatisticBottom;
