const http = require('http'); //http의 인자로 http를 쓴다. 
const fs = require('fs').promises; //객체화를 시켜서 비동기 처리를 할 수 있게 하는 코드
const url = require('url'); //url의 인자로 url을 쓴다. 


const server = http.createServer();
//url을 받아옴
server.on('request',async(req,res)=>{

    try{
        let pathFileName = url.parse(req.url).pathname; //읽어오려는 파일의 경로를 표시한다. 여기서는 url2-1이 들어간다. 
        
        if(pathFileName != "/favicon.ico"){ //favorites icon의 약자로 웹페이지나 웹사이트를 대표하는 아이콘 ->웹 브라우저는 해당 페이지를 요청할 때 자동으로 favicon을 요청하는데, 우리는 favicon이 존재하지 않기 때문에 이와 같은 에러가 발생한다. 그래서 그걸 무시하는 if 문 
            pathFileName = pathFileName == "/"?"/base":pathFileName; //'/'와 같은지 검사식. true일 때 base 파일로 가도록 지정, false 일 때 읽어오려는 파일의 경로로 이동한다. 
            const data = await fs.readFile(`.${pathFileName}.html`); //뒤에 있는 파일을 읽어온다. 처리해서 답이 올때까지 기다릴 테니까 다른 거 하고 와. 파일을 다 읽어오면 data 상수에 들어간다. 
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}); //파일을 plain타입으로 읽는다. (헤더 정의. 응답코드200)
            res.end(data); //출력한 게 html 타입에 맞게 뿌려진다. 
        }
    }
    catch(err){ 
        console.error(err);
        res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'});
        res.end("err: ",err.message)
    }
    console.log("method : ",req.method);//결과: GET
    console.log("urll",req.url); //결과: /
    console.log("url2",url.parse(req.url)); //Url{por}...
    console.log("url2-1",url.parse(req.url).pathname); //결과: '/'
    console.log("url3",url.parse(req.url).query);   //결과: null
    
});
//따로 정의할 수 있다. 
server.listen(8088,()=>{
    console.log("8088번 포트에서 서버가 대기중입니다. ");
});

// server.on('listening')

