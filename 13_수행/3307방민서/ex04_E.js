const express = require('express');
const app = express();
const PORT = 3001

app.get('/form',(request,response)=>{
    response.send("포트연결완료");
});
app.get('/form/faq',(request,response)=>{
    response.send("faq페이지입니다.");
});
app.get('/form/qna',(request,response)=>{
    response.send("qna페이지입니다.");
});
app.listen(PORT,function(){
    console.log(`${PORT} 포트입니다.`);
});


