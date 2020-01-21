//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");


const app = express();

// below lines of code are used to access static file form html
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/singup.html");
});

app.post("/", function(req, res){
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  console.log(firstName, lastName, email);
});


app.listen(3000, function(){
  console.log("server is running on port 3000");
});

//2e374310a51c1bca9a8d60c3833edb33-us4

//d59371a509
