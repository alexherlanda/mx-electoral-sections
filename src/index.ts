import express from "express";

const app = express();
const PORT = 8001;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Running in http://localhost:${PORT}`);
});
