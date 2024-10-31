const express = require("express");

const app = express(); // create an instance of express


const port = process.env.PORT || 5000; // get the port from teh environment variable or user 5000

console.log(port);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})