const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const cors = require('cors')
const path = require("path");

app.use(cors())
dotenv.config();

app.use(express.urlencoded());
// app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/api/users", userRoute);

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
  () => {
    console.log("Connected to MongoDB");
  }
);


app.listen(8800, () => {
  console.log("Backend server is running!");
});
