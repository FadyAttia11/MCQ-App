const express = require("express");
require("./db/mongoose");
const questionRouter = require("./routers/question");

const app = express();
app.use(questionRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server is listening on port " + port);
});
