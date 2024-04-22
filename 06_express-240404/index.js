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
app.listen(3000);
