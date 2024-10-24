require("dotenv").config();
require("./db/connect");
require("express-async-errors") // no need for custom async wrapper
const connectDB = require("./db/connect");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
const url = process.env.MONGODB_URL;

app.use(express.static("./public"));
app.use(express.json());

const tasks = require("./routes/tasks");
app.use("/api/v1/tasks", tasks);

const notFound = require("./middleware/not-found");
app.use(notFound);

const start = async () => {
  try {
    await connectDB(url);
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error("Error connecting to MongoDB", e.message);
  }
};
start();
