const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const mongodb = require("./data/database");

const port = process.env.PORT || 3000;

//app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use("/", require("./routes"));
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        // start the server
        app.listen(port, () => {
            console.log(`Database is listening and node is running on port ${port}`);
        });
    }
})