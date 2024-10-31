const express = require("express");
const Joi = require("joi");
const morgan = require("morgan");
const logger = require("./middlewares/logger");
const config = require("config");

const app = express(); // create an instance of express

app.use(logger);

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
console.log(process.env.PASSWORD);

// if (process.env.NODE_ENV === "development") {
//     app.use(morgan("tiny"));
// }

if (process.env.NODE_ENV === "development") {
    console.log(config.get("password"));
    app.use(
        morgan("combined", {
            skip: function (req, res) {
                return res.statusCode < 400;
            },
        })
    );
}

app.get("/login", (req, res) => {
    res.send("Hello World");
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})