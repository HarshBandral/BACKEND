    // express.json() → Parses JSON requests (API, fetch, Axios).

    // express.urlencoded({ extended: true }) → Parses form data (<form> submissions).

    // Use both if your app handles APIs & HTML form submission const express = require("express");

 const express = require('express');
 const app = express();
 const path = require('path');
 // setting up parsers for form 
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use(express.static(path.join(__dirname,'public')));

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index")
})
    

app.get("/profile/:username",function(req,res){     

    res.send(req.params.username);
});

app.listen(3000,function(){
    console.log("running");
})
