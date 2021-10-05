const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res)=>{
    if(req.url =='/index'){
        fs.readFile('./index.html',(err,data)=>{
            if (err) {
                console.log(err);
            }
            else{
                res.write(data);
            }
        });
        
     }
     if(req.url =='/submit'&&req.method=='post'){
        fs.writeFile('./data.'+txt,data,(err,data)=>{
            if (err) {
                console.log(err);
            }
            else{
                console.log(data);
            }
        })
        
        
     }
    if(req.url =='/home'){
       fs.readFile('./home.html',(err,data)=>{
           if (err) {
               console.log(err);
           }
           else{
               res.write(data);
           }
       });
       
    }
   
    if(req.url =='/'){
        fs.readFile('./index.html',(err,data)=>{

            if (err) {
                res.write(err);
            }
            else{
               res.write(data);
            }
        });
        console.log('hello');
    }

})
server.listen(3000);
console.log('I am listening');