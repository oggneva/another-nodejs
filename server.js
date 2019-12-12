const express = require("express");
const app = express();

app.get("/another", (req, res) => {
    res.send("this is another express app speaking!");
});

app.get("*", (req, res) => {
    res.send("another-nodejs - generic route");
});


app.listen(3000, () => {
    console.log("another exress server listening in port 3000");
});
