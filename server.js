const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(cookieParser());
app.use(express.json());

app.use("/api", router);

mongoose
  .connect(
    process.env.DB
  )
  .then(() => {
    app.listen(port);
    console.log(`Database is connected! Listening to localhost http://localhost:${port}`);
  })
  .catch((err) => console.log(err));
