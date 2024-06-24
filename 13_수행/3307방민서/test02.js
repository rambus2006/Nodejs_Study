const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// cookie-parser 미들웨어를 설정하고 Express 애플리케이션에 추가
app.use(cookieParser());

// 루트 경로 ('/')에 대한 GET 요청 처리
app.get('/home', (request, response) => {
    // 요청 쿠키에 user 데이터가 있는지 확인
    if (request.cookies.grade) {
        response.send("grade: " + request.cookies.grade)

    } else {
        response.send("저장된 쿠키가 없습니다.");
    }
});
// '/setUser' 경로에 대한 GET 요청 처리
app.get('/setCookie', (request, response) => {
    // 쿠키 생성
    response.cookie("grade", "gold");
    // response.cookie("grade", {
    //     grade:"gold"
    // });
    // '/getUser' 경로로 리디렉션
    response.redirect("/home");
});
app.get('/setCookie/:grade', (request, response) => {
    // 쿠키 생성
    response.cookie("grade",request.params.grade);
    // '/getUser' 경로로 리디렉션
    response.redirect("/home");
});
// 서버를 포트 8889에서 시작
app.listen(8084, function() {
    console.log("8083 포트입니다.");
});
