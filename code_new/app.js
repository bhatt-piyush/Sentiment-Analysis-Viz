var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));




///////////////////////////////////LANDING PAGE////////////////////////////////////////
app.get("/", function(req, res){
    res.render("landing.ejs");
});





///////////////////////////////////GRAPH PAGE/////////////////////////////////////////
app.get("/graph", function(req, res){
    res.sendFile(path.join(__dirname + '/graph2.html'));
});


app.get("/line", function(req, res){
    res.sendFile(path.join(__dirname + '/line.html'));
});

app.get("/slide", function(req, res){
    res.sendFile(path.join(__dirname + '/slide.html'));
});


/////////////////////////////////////////SERVER///////////////////////////////////////////////////

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started!");
});