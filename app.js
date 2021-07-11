const express = require("express");
const tiktok = require("tiktok-app-api");
const axios = require("axios");
const cheerio = require("cheerio");

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/api/", async (req, res) => {
  const tiktokApp = await tiktok();

  const user = await tiktokApp.getUserByName("tiktok");
  const userInfo = await tiktokApp.getUserInfo(user);

  res.send(userInfo.followerCount);
});

app.listen(PORT);
