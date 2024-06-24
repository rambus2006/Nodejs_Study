// npm i cookie-parser
// cookie-parser 미들웨어 -> 요청 쿠키를 추출할 수 있다.
// request 객체와 response 객체에 cookies 속성과 cookie라는 메서드가 부여된다.

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// cookie-parser 미들웨어를 설정하고 Express 애플리케이션에 추가
app.use(cookieParser());

// 루트 경로 ('/')에 대한 GET 요청 처리
app.get('/', (request, response) => {
    // 요청 쿠키에 user 데이터가 있는지 확인
    if (request.cookies.user) {
        response.send("쿠키 데이터가 있습니다. /getUser를 사용하여 쿠키를 확인하세요.");
    } else {
        response.send("쿠키가 없습니다. /setUser를 사용하여 쿠키를 설정하세요.");
    }
});

// '/getUser' 경로에 대한 GET 요청 처리
app.get('/getUser', (request, response) => {
    // 요청 쿠키 데이터를 클라이언트에 응답으로 보냄
    response.send(request.cookies);
});

// '/setUser' 경로에 대한 GET 요청 처리
app.get('/setUser', (request, response) => {
    // 쿠키 생성
    response.cookie("st1", "abc");
    response.cookie("user", {
        name: "kim",
        age: 5
    });
    // '/getUser' 경로로 리디렉션
    response.redirect("/getUser");
});

// '/setUser/:nameId' 경로에 대한 GET 요청 처리
app.get('/setUser/:nameId', (request, response) => {
    // 쿠키 생성 (nameId 파라미터 사용)
    response.cookie("st1", "abc");
    response.cookie("user", {
        name: request.params.nameId
    });
    // '/getUser' 경로로 리디렉션
    response.redirect("/getUser");
});

// '/deleteCookie' 경로에 대한 GET 요청 처리
app.get('/deleteCookie', (req, res) => {
    // 요청 쿠키에 user 데이터가 있는지 확인
    if (req.cookies.user) {
        // user 쿠키 제거
        res.clearCookie("user");
        // 루트 경로로 리디렉션
        res.redirect('/');
    } else {
        // 쿠키가 존재하지 않으면 제거할 쿠키가 없음을 알림
        res.send('제거할 쿠키가 없습니다.');
    }
});

// 서버를 포트 8889에서 시작
app.listen(8882, function() {
    console.log("8882 포트입니다.");
});
