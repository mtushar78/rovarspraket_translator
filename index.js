const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { check, validationResult } = require("express-validator");
app.use(bodyParser.json());

require('dotenv').config({
    path: './config/index.env'
});
app.use("/translate", require("./routes/translate.route"));
app.use("/jokes", require("./routes/jokes.route"));


app.use((req, res) => {
    res.status(404).json({
      message: "Endpoint Not Found !!!",
    });
  });

  const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("listening on port:" + PORT);
  });
  