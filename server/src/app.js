const express = require("express");

const app = express();

// Global middleware
app.use(express.json());

//Test route
app.get("/", (req, res) => {
     res.send("API is running");
});

module.exports = app;