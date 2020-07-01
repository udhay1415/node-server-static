const express = require("express");

const app = new express();

app.use(express.static(`${__dirname}/build`));

app.listen("3000", (req, res) => {
  console.log("Listening");
});
