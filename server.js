const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();

// taking input from user from req object so we have to convert json to object
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set Static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openaiRoutes"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
