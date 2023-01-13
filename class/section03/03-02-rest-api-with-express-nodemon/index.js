// const express = require('express') // 옛날 방식 => commonjs
import express from "express"; // 요즘 방식 => module

const app = express();

app.get("/boards", function (req, res) {
  res.send("dfdsfsafadfsf");
});

app.listen(3000);
