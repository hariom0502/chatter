const express = require("express");
const dotenv= require("dotenv")
const { messages } = require("./dummyData/data.js");

const app = express();
dotenv.config()


app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/chat", (req, res) => {
  res.send(messages);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChatMessage = messages.find((chat) => chat._id === req.params.id);
  res.send(singleChatMessage);
});

const PORT= process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
