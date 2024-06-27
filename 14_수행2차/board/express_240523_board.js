// npm install express
const express = require('express'); // Express 모듈을 불러옴
const app = express(); // Express 애플리케이션 객체 생성

// npm install dotenv
const dotenv = require('dotenv').config(); // .env 파일을 사용하여 환경 변수 설정

// npm install morgan
const morgan = require('morgan');
app.use(morgan('dev')); // Morgan 미들웨어를 사용하여 개발 환경에서 HTTP 요청 로그를 출력

// npm install cors
const cors = require('cors');
app.use(cors({
    origin: "http://127.0.0.1:5500", // 허용할 오리진 설정 (CORS 정책)
    credentials: true, // 자격 증명을 요청하는지 여부 설정 (CORS 정책)
}));

// 포트 설정
app.set('port', process.env.PORT || 8080); // 포트 번호를 환경 변수에서 가져오거나 기본값으로 8080을 사용

// 공통 미들웨어 설정
app.use(express.json()); // JSON 파싱을 위한 미들웨어
app.use(express.urlencoded({extended:true})); // URL-encoded 데이터 파싱을 위한 미들웨어

// 테스트를 위한 게시글 데이터
let boardList = []; // 게시글 데이터를 저장할 배열
let numOfBoard = 1; // 게시글 번호를 관리하기 위한 변수

// 게시글 API 라우팅
// 기본 루트
app.get('/',(req,res)=>{
    res.send("게시글 API 확인"); // 기본 루트에 접속 시 메시지 응답
});

// 모든 게시글 가져오기
app.get('/board',(req,res)=>{
    res.send(boardList); // 현재 저장된 모든 게시글 목록 응답
});

// 특정 id의 게시글 가져오기
app.get('/board/:id',(req,res)=>{
    const findItem = boardList.find((item)=>{
        return item.id == req.params.id; // 요청된 id와 일치하는 게시글 찾기
    });
    console.log("게시글 조회 결과:", findItem); // 콘솔에 조회된 게시글 출력 (테스트용)
    res.send(findItem); // 조회된 게시글 응답
});

// 게시글 등록
app.post('/board',(req,res)=>{
    const board = {
        "id" : numOfBoard++, // 새로운 게시글의 id 설정 및 증가
        "user_id" : req.body.user_id, // 요청에서 받은 사용자 id
        "date" : new Date(), // 현재 시간으로 날짜 설정
        "title" : req.body.title, // 요청에서 받은 제목
        "content" : req.body.content // 요청에서 받은 내용
    };
    boardList.push(board); // 게시글 배열에 새로운 게시글 추가

    //res.redirect('/board'); // 클라이언트 측에서 리디렉션 요청 (주석 처리된 상태)
    res.send("글이 등록되었습니다."); // 등록 성공 메시지 응답
});

// 게시글 수정
app.put('/board/:id',(req,res)=>{
    const findItem = boardList.find((item)=>{
        return item.id == req.params.id; // 요청된 id와 일치하는 게시글 찾기
    });

    const idx = boardList.indexOf(findItem); // 찾은 게시글의 인덱스 구하기
    boardList.splice(idx,1); // 기존 게시글 삭제

    // 새로운 게시글 객체 생성
    const board = {
        "id": req.params.id, // 요청된 id로 설정
        "user_id" : req.params.user_id, // 요청에서 받은 사용자 id
        "date": new Date(), // 현재 시간으로 날짜 설정
        "title": req.body.title, // 요청에서 받은 제목
        "content": req.body.content // 요청에서 받은 내용
    };
    boardList.push(board); // 수정된 게시글 추가

    //res.redirect('/board'); // 클라이언트 측에서 리디렉션 요청 (주석 처리된 상태)
    res.send("글이 수정되었습니다."); // 수정 성공 메시지 응답
});

// 게시글 삭제
app.delete('/board/:id',(req,res)=>{
    const findItem = boardList.find((item) => {
        return item.id == req.params.id; // 요청된 id와 일치하는 게시글 찾기
    });
    const idx = boardList.indexOf(findItem); // 찾은 게시글의 인덱스 구하기
    boardList.splice(idx,1); // 게시글 배열에서 삭제

    //res.redirect('/board'); // 클라이언트 측에서 리디렉션 요청 (주석 처리된 상태)
    res.send("글이 삭제되었습니다."); // 삭제 성공 메시지 응답
});

// 서버 실행
app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버 실행'); // 서버를 지정된 포트에서 실행하는 로그 출력
});
