const http  = require('http')
const Doctor = require('./db.js')

const server = http.createServer((req,res)=>{
  if(req.method==="GET" && req.url==='/'){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("hello and welcome to our web app");
  }
  else if(req.method==='POST' && req.url==='/'){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("post request");
  }
  else{
    res.writeHead(404,{'content-type':'text/plain'});
    res.end("chud gaye guru");
  }
});

const c = 134;

server.listen(8000,()=>{
  console.log("server listening at 3000 port number")
})
