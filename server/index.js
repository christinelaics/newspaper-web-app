require("dotenv").config(); // process.env
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const BASE_URL = "http://newsapi.org/v2";
const NEWS_API_KEY = process.env.NEWS_API_KEY;
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({status: "ok", time: new Date().toISOString()});
})

app.get("/api/top-headlines", async (req, res) => {
    try {
        const { sources, category, pageSize=20, page = 1} = req.query;

        const params = {
            apiKey: NEWS_API_KEY,
            country: "us",
            pageSize,
            page,
            ...(category && {category}),
            ...(sources && {sources})
        }
        const response = await axios.get(`${BASE_URL}/top-headlines`, {params});
        res.json(response.data);
    } catch (err) {
        console.log("error fetching headlines: ", err.message);
        res.status(500).json({error: "failed to fetch top headlines"});
    }
});

app.get("/api/search", async (req, res) => {
    try {
        const {q, pageSize=20, page=1} = req.query;
        if(!q) return res.status(400).json({error: "Missing query parameter q"});
        const response = await axios.get(`${BASE_URL}/everything`, 
            {params: {apiKey: NEWS_API_KEY, q, pageSize, page}});
        res.json(response.data);
    } catch (err) {
        console.log("error searching news", err.message);
        res.status(500).json({error: "Failed to search news"});
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
