import React, { useState } from "react";
import FuelMainCard from "./FuelMainCard";
import FuelCard from "./FuelCard";

const Fuel = () => {
  const [fuels, setFuels] = useState([
    {
      name: "Motor Gasoline",
      price: "1.58",
      percentage: 6,
      down: true,
    },
    {
      name: "Autogas",
      price: "0.98",
      percentage: 2,
    },
    {
      name: "Fuel Oil",
      price: "0.74",
      percentage: 2,
    },
  ]);

  return (
    <div className="fuel">
      <FuelMainCard />
      {fuels.map((fuel, index) => (
        <FuelCard
          key={index}
          name={fuel.name}
          price={fuel.price}
          percentage={fuel.percentage}
          down={fuel.down}
        />
      ))}
    </div>
  );
};

export default Fuel;
