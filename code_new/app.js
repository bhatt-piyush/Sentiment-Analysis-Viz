var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
//app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));




///////////////////////////////////LANDING PAGE////////////////////////////////////////
app.get("/", function(req, res){
    res.render("landing.ejs");
});

///////////////////////////////////GRAPH PAGE/////////////////////////////////////////
// app.get("/graph", function(req, res){
//     res.sendFile("graph.html");
// });


////////////////////////////////////PATIENTS///////////////////////////////////////////

var patients = [
        {name: "Mr. A", image: "https://images.unsplash.com/photo-1497414146483-5bcafdccfdff?auto=format&fit=crop&w=750&q=80"},
        {name: "Ran Man", image: "https://images.unsplash.com/photo-1479492591199-eb2492814e73?auto=format&fit=crop&w=750&q=80"},
        {name: "Mountain Goat", image: "https://images.unsplash.com/photo-1504676232785-213e681eeabb?auto=format&fit=crop&w=750&q=80"},
        {name: "Ronny", image: "https://images.unsplash.com/photo-1508343451540-5e50f1592671?auto=format&fit=crop&w=750&q=80"},
        {name: "Forlan", image: "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?auto=format&fit=crop&w=750&q=80"}
];
    


app.get("/patients", function(req, res){
    res.render("patients.ejs",{patients: patients});
});

app.post("/patients", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newpatient = {name: name, image: image}
    patients.push(newpatient);
    //redirect back to campgrounds page
    res.redirect("/patients");
});

app.get("/patients/new", function(req, res){
   res.render("new_patient.ejs"); 
});

// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("The Mochi Server Has Started!");
// });


///////////////////////////////NURSES////////////////////////////////////////


var nurses = [
        {name: "Rebecca", image: "https://images.unsplash.com/photo-1515819119497-e71c25b128ab?auto=format&fit=crop&w=1350&q=80"},
        {name: "Miss D", image: "https://images.unsplash.com/photo-1433588641602-7c1083c4f0e2?auto=format&fit=crop&w=750&q=80"},
        {name: "Lone Wolf", image: "https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?auto=format&fit=crop&w=751&q=80"},
        {name: "Kurtlynn", image: "https://images.unsplash.com/photo-1499257044300-c62bf0a68ccc?auto=format&fit=crop&w=750&q=80"},
        {name: "Nurse C", image: "https://images.unsplash.com/photo-1490427712608-588e68359dbd?auto=format&fit=crop&w=750&q=80"}
];
    


app.get("/nurses", function(req, res){
    res.render("nurses.ejs",{nurses: nurses});
});

app.post("/nurses", function(req, res){
    // get data from form and add to nurses array
    var name = req.body.name;
    var image = req.body.image;
    var newnurse = {name: name, image: image}
    nurses.push(newnurse);
    //redirect back to nurses page
    res.redirect("/nurses");
});

app.get("/nurses/new", function(req, res){
   res.render("new_nurse.ejs"); 
});


/////////////////////////////////////////SERVER///////////////////////////////////////////////////

// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("The Mochi Server Has Started!");
// });var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended: true}));
// app.set("view engine", "ejs");



///////////////////////////////////LANDING PAGE////////////////////////////////////////
app.get("/", function(req, res){
    res.render("landing.ejs");
});

///////////////////////////////////GRAPH PAGE/////////////////////////////////////////
app.get("/graph", function(req, res){
    res.sendFile(path.join(__dirname + '/graph2.html'));
});


////////////////////////////////////PATIENTS///////////////////////////////////////////

var patients = [
        {name: "Mr. A", image: "https://images.unsplash.com/photo-1497414146483-5bcafdccfdff?auto=format&fit=crop&w=750&q=80"},
        {name: "Ran Man", image: "https://images.unsplash.com/photo-1479492591199-eb2492814e73?auto=format&fit=crop&w=750&q=80"},
        {name: "Mountain Goat", image: "https://images.unsplash.com/photo-1504676232785-213e681eeabb?auto=format&fit=crop&w=750&q=80"},
        {name: "Ronny", image: "https://images.unsplash.com/photo-1508343451540-5e50f1592671?auto=format&fit=crop&w=750&q=80"},
        {name: "Forlan", image: "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?auto=format&fit=crop&w=750&q=80"}
];
    


app.get("/patients", function(req, res){
    res.render("patients.ejs",{patients: patients});
});

app.post("/patients", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newpatient = {name: name, image: image}
    patients.push(newpatient);
    //redirect back to campgrounds page
    res.redirect("/patients");
});

app.get("/patients/new", function(req, res){
   res.render("new_patient.ejs"); 
});

// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("The Mochi Server Has Started!");
// });


///////////////////////////////NURSES////////////////////////////////////////


var nurses = [
        {name: "Rebecca", image: "https://images.unsplash.com/photo-1515819119497-e71c25b128ab?auto=format&fit=crop&w=1350&q=80"},
        {name: "Miss D", image: "https://images.unsplash.com/photo-1433588641602-7c1083c4f0e2?auto=format&fit=crop&w=750&q=80"},
        {name: "Lone Wolf", image: "https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?auto=format&fit=crop&w=751&q=80"},
        {name: "Kurtlynn", image: "https://images.unsplash.com/photo-1499257044300-c62bf0a68ccc?auto=format&fit=crop&w=750&q=80"},
        {name: "Nurse C", image: "https://images.unsplash.com/photo-1490427712608-588e68359dbd?auto=format&fit=crop&w=750&q=80"}
];
    


app.get("/nurses", function(req, res){
    res.render("nurses.ejs",{nurses: nurses});
});

app.post("/nurses", function(req, res){
    // get data from form and add to nurses array
    var name = req.body.name;
    var image = req.body.image;
    var newnurse = {name: name, image: image}
    nurses.push(newnurse);
    //redirect back to nurses page
    res.redirect("/nurses");
});

app.get("/nurses/new", function(req, res){
   res.render("new_nurse.ejs"); 
});


/////////////////////////////////////////SERVER///////////////////////////////////////////////////

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Mochi Server Has Started!");
});