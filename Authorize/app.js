const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require("./models/user");
const jwt  = require('jsonwebtoken');

const app = express();
const path = require('path');
const { log } = require('console');


app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.render('index');
});


app.post('/create',(req,res)=>{
    let{username,email,password,age} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,hash)=>{
            let createUser = await userModel.create({
                username,
                email,
                password:hash,
                age,
            })

            let token = jwt.sign({email},"secret");
            res.cookie('token',token);

            res.send(createUser);
        })
    })    
});


 // logout
 app.get('/logout',function(req,res){
    res.cookie("token","");
    res.redirect("/");
})


//login
app.get('/login',function(req,res){
    res.render('login');
})

app.post('/login',async function(req,res){
    let user =await userModel.findOne({email:req.body.email});
    if(!user) return res.send("something went wrong");

    bcrypt.compare(req.body.password,user.password,function(err,result){
        if(result) {
            let token = jwt.sign({email:user.email},"secret");
            res.cookie("token",token);
            res.send("yes you can login");
        }
        else res.send("something went wrong");
    })
      
})

app.listen(3000);