const express = require("express");
const dotenv= require("dotenv")
const { messages } = require("./dummyData/data.js");
const dbConnect= require('./config/db')
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json())
dotenv.config()
dbConnect()

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT= process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
