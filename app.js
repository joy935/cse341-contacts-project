const express = require("express");
const app = express();
const mongodb = require("./data/database");

const port = process.env.PORT || 3000;

app.use("/", require("./routes")
);

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