import React, { useState } from "react";
import ActivityRow from "./ActivityRow";

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
      <div className="activity__header">
        <h1 className="activity__header--title">Activity</h1>
        <p className="activity__header--description">this month</p>
      </div>

      {activity.map((act, index) => (
        <ActivityRow
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
