// express 모듈을 불러옴
const express = require('express');
// express 애플리케이션을 생성
const app = express();
// path 모듈을 불러옴
const path = require('path');

// '/html2' 경로로 들어오는 요청에 대해 "html" 디렉토리 내의 정적 파일을 제공
app.use('/html2', express.static(path.join(__dirname, "html")));

// 미들웨어 함수 정의
const middle1 = (req, res, next) => {
    console.log("미들웨어 설정");
    // 다음 미들웨어 또는 라우트 핸들러로 제어를 전달
    next();
};

// 미들웨어 등록
app.use(middle1);

// 루트 경로에 대한 GET 요청 처리
app.get('/', function(req, res) {
    // 현재 디렉토리와 "html" 디렉토리 경로를 로그에 출력
    console.log("경로: ", path.join(__dirname, "html"));
    // 클라이언트에게 "Hello World" 응답 전송
    res.send("Hello World");
});

// '/banana' 경로에 대한 GET 요청 처리
app.get('/banana', function(req, res) {
    // 클라이언트에게 "banana" 응답 전송
    res.send("banana");
});

// '/apple' 경로에 대한 GET 요청 처리
app.get('/apple', function(req, res) {
    // 클라이언트에게 "apple" 응답 전송
    res.send("apple");
});

// '/home' 경로에 대한 GET 요청 처리
app.get('/home', function(req, res) {
    // __dirname 디렉토리의 "home.html" 파일을 클라이언트에게 전송
    res.sendFile(__dirname + '/home.html');
});

// 서버를 3000번 포트에서 시작하고 요청 대기
app.listen(3000);
