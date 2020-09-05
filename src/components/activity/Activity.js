import React, { useState } from "react";
import ActivityCard from "./ActivityCard";

const Activity = () => {
  const [activity, setActivity] = useState([
    {
      time: "16:38",
      name: "John Doe",
      title: "Updated List",
      text: "Price change",
    },
    {
      time: "16:38",
      name: "John Doe",
      title: "Updated List",
      text: "Price change",
    },
    {
      time: "16:38",
      name: "John Doe",
      title: "Updated List",
      text: "Price change",
    },
    {
      time: "16:38",
      name: "John Doe",
      title: "Updated List",
      text: "Price change",
    },
    {
      time: "16:38",
      name: "John Doe",
      title: "Updated List",
      text: "Price change",
    },
  ]);

  return (
    <div className="activity">
      <div className="activity__top">
        <h1 className="activity__title">Activity</h1>
        <p className="acttivity__text">this month</p>
      </div>

      {activity.map((act, index) => (
        <ActivityCard
          key={index}
          time={act.time}
          title={act.title}
          name={act.name}
          text={act.text}
        />
      ))}
    </div>
  );
};

export default Activity;
