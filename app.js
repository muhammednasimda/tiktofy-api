const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const { getVideoMeta } = require("tiktok-scraper");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/api", async (req, res) => {
  try {
    const resp = await getVideoMeta(
      "https://www.tiktok.com/@scout2015/video/6718335390845095173",
      { hdVideo: false }
    );
    console.log(resp);
    res.json(resp);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.listen(PORT);
