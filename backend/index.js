const fs = require("fs/promises");
const bodyParser = require("body-parser")
const path = require("path");
const express = require("express");
const productsFile="./data/meals.json";

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (req, res) => {
  try {
    const raw = await fs.readFile(productsFile, "utf-8");
    const meals = JSON.parse(raw);

    res.json(meals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Toodete lugemine ebaõnnestus" });
  }
});
  
  
  

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3001);
