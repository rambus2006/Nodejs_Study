
//npm i express-session
//express-session 

// express와 express-session 모듈을 로드
const express = require('express');
const session = require('express-session');
const app = express();

// 세션 미들웨어 설정 및 애플리케이션에 추가
app.use(session({
    secret: "AnimalBannaCandy", // 세션 암호화에 사용될 비밀 키
    resave: false, // 세션에 변동사항이 없어도 다시 저장할지 설정
    saveUninitialized: true, // 세션에 저장할 내용이 없어도 저장할지 설정
    cookie: {
        httpOnly: true, // 클라이언트 측 스크립트에서 쿠키에 접근하지 못하도록 설정
    },
    // name: 'connect.sid' // 세션 쿠키의 이름 설정 (기본값: 'connect.sid')
}));

// 루트 경로 ('/')에 대한 GET 요청 처리
app.get('/', (request, response) => {
    // 세션에 user 데이터가 있는지 확인
    if (request.session.user) {
        response.send("세션 데이터가 있습니다. /getUser를 사용하여 세션을 확인하세요.");
    } else {
        response.send("세션 데이터가 없습니다. /setUser를 사용하여 세션을 설정하세요.");
    }
});

// '/getUser' 경로에 대한 GET 요청 처리
app.get('/getUser', (request, response) => {
    // 세션에 저장된 user 데이터를 클라이언트에 응답으로 보냄
    response.send(request.session.user);
});

// '/setUser' 경로에 대한 GET 요청 처리
app.get('/setUser', (request, response) => {
    // 세션에 st1 및 user 데이터 설정
    request.session.st1 = "abc";
    request.session.user = { name: "kim", age: 5 };
    // '/getUser' 경로로 리디렉션
    response.redirect("/getUser");
});

// '/setUser/:nameId' 경로에 대한 GET 요청 처리
app.get('/setUser/:nameId', (request, response) => {
    // 세션에 st1 및 user 데이터 설정 (nameId 파라미터 사용)
    request.session.st1 = "abc";
    request.session.user = { name: request.params.nameId };
    // '/getUser' 경로로 리디렉션
    response.redirect("/getUser");
});

// '/deleteSession' 경로에 대한 GET 요청 처리
app.get('/deleteSession', (req, res) => {
    // 세션이 존재하는 경우 세션 파괴
    if (req.session) {
        req.session.destroy(() => {
            // 세션 파괴 후 루트 경로로 리디렉션
            res.redirect('/');
        });
    } else {
        // 세션이 존재하지 않으면 제거할 세션이 없음을 알림
        res.send('제거할 세션이 없습니다.');
    }
});

// 서버를 포트 8889에서 시작
app.listen(8889, function() {
    console.log("8889 포트입니다.");
});


