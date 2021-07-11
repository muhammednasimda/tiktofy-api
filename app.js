const express = require("express");
const tiktok = require("tiktok-scraper");
const axios = require("axios");
const cheerio = require("cheerio");

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/api/", async (req, res) => {
  const videoMeta = await tiktok
    .getVideoMeta(
      "https://www.tiktok.com/@scout2015/video/6718335390845095173",
      { noWaterMark: true }
    )
    .catch((e) => console.log(e));
  console.log(videoMeta);
});

app.listen(PORT);
