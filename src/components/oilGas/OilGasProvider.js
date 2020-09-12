import React, { useState } from "react";
import ProviderCard from "./ProviderRow";

const OilGasProvider = () => {
  const [providers, setProviders] = useState([
    {
      name: "INA d.d",
      location: "Zagreb,  Croatia",
      color: "#0052B4",
      backColor: "rgba(0, 82, 180, 0.5)",
    },
    {
      name: "Shell",
      location: "The Hague, Netherlands",
      color: "#FF5151",
      backColor: "rgba(255, 81, 81, 0.5)",
    },
    {
      name: "Respol",
      location: "Madrid, Spain",
      color: "#E86F1B",
      backColor: "rgba(232, 111, 27, 0.5)",
    },
    {
      name: "Total",
      location: "Courbevoie, France",
      color: "#FFB547",
      backColor: "rgba(255, 181, 71, 0.5)",
    },
    {
      name: "Chevron",
      location: "San Ramon, United States",
      color: "#4596D1",
      backColor: "rgba(69, 150, 209, 0.5)",
    },
    {
      name: "INA d.d",
      location: "",
      color: "#0052B4",
      backColor: "rgba(0, 82, 180, 0.5)",
    },
  ]);

  return (
    <div className="oil-gas">
      <h1 className="oil-gas__info oil-gas__info--title">Oil & Gas Provider</h1>

      {providers.map((provider, index) => (
        <ProviderCard
          key={index}
          name={provider.name}
          location={provider.location}
          color={provider.color}
          backColor={provider.backColor}
        />
      ))}
    </div>
  );
};

export default OilGasProvider;
