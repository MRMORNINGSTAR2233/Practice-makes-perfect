const http = require("http");

const server= http.createServer((req,res)=>{
    res.end("YO000 Whats up!!");
});

server.listen(5000,()=>{
    console.log("Server is working");
});