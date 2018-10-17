var express = require("express");
var path = require("path");
var app = express();

app.use("/static", express.static(__dirname + "/static"));

// app.get('/', function (req, res) {
//     res.redirect("/dappathon");
// });

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/dappathon", function(req, res) {
  res.sendFile(path.join(__dirname + "/dappathon.html"));
});

var port = process.env.PORT || 3000;

app.listen(port);

console.log("Running on Port " + port);
