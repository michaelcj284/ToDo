const express = require('express');

const app = express();

// route parameter

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/about", (req, res) => {
    res.send("About Page");
})

app.get("/contact", (req, res) => {
    res.send("Contact Page");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

