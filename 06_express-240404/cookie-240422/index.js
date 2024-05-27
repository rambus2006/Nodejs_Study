const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());
app.get('/',(req,res)=>{
    res.cookie("cookie","chickchock",{
        maxAge:50000
    });
    
    res.send("<h1>홈입니다.</h1>")
})
app.get("/cookie",(req,res)=>{
    const c1 = req.cookies;
    console.log(c1);
    res.send("<h1>쿠키 페이지입니다.</h1>");
})
app.get("/clear",(req,res)=>{
    res.clearCookie("cookie");
    res.send("<h1>쿠키가 삭제되었습니다.");
})
app.listen(3000);
