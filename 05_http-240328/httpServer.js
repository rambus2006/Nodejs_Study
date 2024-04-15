const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write("<h1>안녕?</h1>")
    res.end("<p>서버야 반가워</p>")
});
server.listen(8088);

server.on('listening',()=>{
    console.log("8088번 포트에서 서버가 대기중입니다. ");
})