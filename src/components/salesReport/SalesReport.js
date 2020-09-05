import React, { useState } from "react";
import SalesCard from "./SalesCard";

const SalesReport = () => {
  const [reports, setReports] = useState([
    {
      active: true,
      title: "Chevron",
      price: "1.58",
      percentage: "2.1",
    },
    {
      title: "Shell",
      price: "1.58",
      percentage: "2.1",
    },
    {
      title: "Total",
      price: "1.58",
      percentage: "2.1",
    },
    {
      title: "repsol",
      price: "1.58",
      percentage: "2.1",
    },
    {
      title: "Ina",
      price: "1.58",
      percentage: "2.1",
    },
    {
      title: "shell",
      price: "1.58",
      percentage: "2.1",
    },
    {
      title: "total",
      price: "1.58",
      percentage: "2.1",
    },
    {
      title: "Chevron",
      price: "1.58",
      percentage: "2.1",
    },
    {
      title: "ina",
      price: "1.58",
      percentage: "2.1",
    },
  ]);

  return (
    <div className="sales">
      <h1 className="sales__title">Sales Report</h1>

      <div className="sales__report">
        <div className="sales__top">
          <p className="text">#</p>
          <p className="text">PROVIDER</p>
          <p className="text">STATS</p>
        </div>
      </div>

      {reports.map((report, index) => (
        <SalesCard
          key={index}
          number={index + 1}
          title={report.title}
          price={report.price}
          percentage={report.percentage}
          active={report.active}
        />
      ))}
    </div>
  );
};

export default SalesReport;
