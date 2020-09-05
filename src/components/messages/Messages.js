import React, { useState } from "react";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      name: "Jessica Smith",
      text: "Good Morning!",
      time: 32,
      active: true,
    },
    {
      name: "Jessica Smith",
      text: "Good Morning!",
      time: 32,
    },
    {
      name: "Jessica Smith",
      text: "Good Morning!",
      time: 32,
    },
    {
      name: "Jessica Smith",
      text: "Good Morning!",
      time: 32,
    },
    {
      name: "Jessica Smith",
      text: "Good Morning!",
      time: 32,
    },
  ]);

  return (
    <div className="messages ">
      <h1 className="messages__title">Messages</h1>
      {messages.map((message) => (
        <Message
          active={message.active}
          name={message.name}
          text={message.text}
          time={message.time}
        />
      ))}
    </div>
  );
};

export default Messages;
