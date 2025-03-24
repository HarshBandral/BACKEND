// writeFile appendFile rename copyFile unlink 
// rmdir or rm - used to del folder 
// mkdir 
// create folder .. read file .. read folder


const fs = require('fs');
/* fs.copyFile("hello.text","./newFolder/coped.text",function(err){ff
    if(err)   console.error(err.message);
    else console.log("File copied");
 })




// fs.unlink("hello.text",function(err){
//     if(err) console.log(err);
//     else console.log("removed");
// }) */

fs.rm("./newFolder",{recursive:true},function(err){
   if(err) console.log(err.message);
   else console.log("removed");
})


// creating server 

const http = require('http');
const server = http.createServer(function(req,res){
    res.end("You created a server");
})
server.listen(3000);