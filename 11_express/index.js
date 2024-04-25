const express = require('express')
const app = express();
const path = require('path')

app.use('/html2',express_static(path.join(__dirname,"html")));

//미들웨어 함수 
const middle1 =(req,res,next)=>{
    console.log("미들웨어 설정")
    //다음 미들웨어 또는 라우트 핸들러로 제어를 전달 
    next();
}
//미들웨어 등록 
app.use(middle1)

app.get('/',function(rec,res) {
    console.log("경로 : ",path.join(__dirname,"html"));
    res.send("Hello World");
})

app.get('/banana',function(req,res){
    res.send("banana");
})
app.get('/apple',function(req,res){
    res.send("apple")
})
app.get('/home',function(req,res){
    res.sendFile(__dirname+'/home.html');
});
app.listen(3000);