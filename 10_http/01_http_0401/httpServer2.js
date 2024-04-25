const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async(req,res)=>{
    try{
        const data = await fs.readFile("./server2.html");
        res.writeHead(200,{ 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    }catch(err){
        console.error(err);
        res.writeHead(500,{ 'Content-Type': 'text/plain; charset=utf-8' });
        res.end("err : ",err.message);
    };
});

server.listen(8088);

server.on('listening',()=>{
    console.log("여기");
});


