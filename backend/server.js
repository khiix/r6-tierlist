const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./data/tiers.json";

// Devuelve la tier list
app.get("/tiers", (req, res) => {
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  res.json(JSON.parse(data));
});

// Guarda la tier list
app.post("/tiers", (req, res) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(req.body, null, 2));
  res.json({ status: "saved" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
