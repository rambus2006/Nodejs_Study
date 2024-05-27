const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());
app.get('/',(req,res)=>{
   
    const cookie = req.cookies.name;
    if(cookie!=undefined){
        res.send("<h1>쿠키값은 "+cookie+"입니다.</h1>")
    }else{
        res.send("로그아웃되었습니다.")
    }
    res.send("<h1>홈입니다.</h1>")
})
app.get("/login",(req,res)=>{
    
    
    const createcookie = res.cookie("name","bangminseo");
    const c1 = "bangminseo";
    res.send("<h1>"+c1 +"님 로그인되었습니다.</h1>");
})
app.get("/logout",(req,res)=>{
    res.clearCookie("name");
    res.send("<h1>로그아웃되었습니다.</h1>");
})
app.listen(3000);
