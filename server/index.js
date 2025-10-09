require("dotenv").config(); // process.env
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("sever running on http://localhost:3000"));