const express = require("express")
const app = express();
const session = require('express-session');

//세션의 기본값 
app.use(session({
    secret:"amogona",    
}))

//쿠키값을 세션으로 변환 
app.get("/setUser",(req,res)=>{
    req.session.user = {name:"kim",age:5};
    res.redirect("/getUser") //getUser로 리다이렉트 
})
app.get("/getUser",(req,res)=>{
    res.send(req.session.user);
})
app.get("/deleteSession",(req,res)=>{
    if(req.session){
        req.session.destroy(()=>{
            res.redirect("/getUser")
        });
    }else{
        res.send("제거할 세션이 없습니다.");
    }
});

//1. /setUser/yoon => username이 yoon으로 등록되게 라우터 만들기. 
app.get("setUser/yoon",(req,res)=>{
    
})
//2. / => 루트 라우터일 때 세션이 있는지 없는지 안내하기 
app.get("/",(req,res)=>{
  if(req.session==null){
    
  }  
})

app.listen(8889,()=>{
    console.log("정상")
})