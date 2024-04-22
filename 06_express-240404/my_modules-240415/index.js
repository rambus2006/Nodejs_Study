const express = require('express');
const app = express();
const path = require('path');

// app.use('/html',express.static(path.join(__dirname,'html')))

app.use("/html2",express.static(path.join(__dirname,"html")))
//미들웨어 함수 모듈에서 가지고 오기 
const middle1 = require("./middle1");
//미들웨어 등록
app.use(middle1);

app.get('/',function(req,res,next){
    console.log("경로 : ",path.join(__dirname,"html"));
    // res.send("Hello World");
    next();
})
app.get('/',function(req,res){
    console.log("두번째 / 입니다. ");
    res.send("Hello World")
})

app.get('/home',function(req,res,next){
    //애플리케이션 수준의 상태 저장 
    req.app.locals.message = 'hello, world!';
    next();
    
},(req,res)=>{
    //응답 수준의 상태 저장 
    res.locals.additionalMessage = 'swag';
    const message=`${req.app.locals.message} ${res.locals.additionalMessage}`;
    console.log(message);

    res.sendFile(__dirname + '/home.html')
});

app.listen(3000);