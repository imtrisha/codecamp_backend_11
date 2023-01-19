import express from "express";

const app = express();

app.get("/qqq", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("백엔드 서버가 켜졌어요!!!");
});
