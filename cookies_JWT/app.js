
/*  => for set annd read cookie

 const cookieParser = require('cookie-parser');
    app.use(cookieParser());

    app.get('/',function(req,res){
    res.cookie("name",'harsh');// set - res
  res.send('done');
})


app.get('/read',function(req,res){
    console.log(req.cookies);// read - req
    res.send('yokoso');
}) 


    => for salt and hash 

    bcrypt.genSalt(saltRounds,function(err,salt){
        bcrypt.hash(myPlaintextPassword,salt,function(err,hash){
            //store hash in your password DB
        })
    })

        -> salt is a random string 
        -> default value of saltRounds is 10
    
    
    

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

    => encrpyt 

app.get('/',function(req,res){
    bcrypt.genSalt(10,function(err,salt){
        console.log("salt is :", salt);
        bcrypt.hash("password",salt,function(err,hash){
            console.log("password is :",hash);
            //store hash in your password DB
            res.send(`yokoso \n ${hash}`)
        })
    })
})

const hashed = "$2b$10$vgD9aRiM8yNhEcpiWdlSsuIuRZlXt9T.1K175I4y5XpIrnkV5j202";



     => decrypt - by comparing 
bcrypt.compare("password", hashed, function(err, result) {
        console.log(result)
});
*/


// => jwt 

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/',function(req,res){
    let token = jwt.sign({email:"ichi@gmail.com"},"secret");
    res.cookie('token',token);
    console.log(token);
    res.send('done');
})

app.get('/read',function(req,res){
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send('done');
})




app.listen(3000,() => console.log("Server running on port 3000")); 