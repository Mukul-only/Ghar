const express = require ("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let _ = require("lodash");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home");
});

app.post("/result",(req,res)=>{
    if(_.lowerCase(req.body.search) === _.lowerCase("Axis Colleges") || _.lowerCase(req.body.search) === _.lowerCase("Axis")){
        res.render("areas",{search : req.body.search});
        
    }
    else{
        req.render("areas");
    }
});

app.listen('3000',()=>{
    console.log("server running at port 3000");
});


                   