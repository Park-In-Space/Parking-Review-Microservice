var express = require("express");
var app  = express();
//Testing GET
app.get("/url", (req, res, next) => {
    res.json(["Hello world!"]);
   });

app.listen(3000,() =>{
    console.log("Server running on port 3000");
});