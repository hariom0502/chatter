import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chatMessage, setChatMesasge] = useState([]);

  const chatMessages = async () => {
    const { data } = await axios.get("/api/chat");
    setChatMesasge(data);
  };
  useEffect(() => {
    chatMessages();
  }, []);
  return (
    <div>
      {chatMessage.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chatpage;
