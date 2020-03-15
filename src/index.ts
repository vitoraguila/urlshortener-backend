import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("First route");
});

app.listen(3333);
