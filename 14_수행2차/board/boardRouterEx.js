// npm install express
const express = require('express'); // Express 모듈을 불러옴
const app = express(); // Express 애플리케이션 객체 생성

// npm install dotenv
const dotenv = require('dotenv').config(); // .env 파일을 사용하여 환경 변수 설정

// npm install morgan
const morgan = require('morgan');
app.use(morgan('dev')); // Morgan 미들웨어를 사용하여 개발 환경에서 HTTP 요청 로그를 출력

// npm install ejs
app.set('view engine', 'ejs'); // EJS를 템플릿 엔진으로 설정
app.set('views', __dirname + '/views'); // 템플릿 파일의 디렉토리 설정

// npm install cors
const cors = require('cors');
app.use(cors({
    origin: "http://127.0.0.1:5500", // 허용할 오리진 설정 (CORS 정책)
    credentials: true, // 자격 증명을 요청하는지 여부 설정 (CORS 정책)
}));

// 공통 미들웨어 설정
app.use(express.json()); // JSON 파싱을 위한 미들웨어
app.use(express.urlencoded({extended:true})); // URL-encoded 데이터 파싱을 위한 미들웨어

// helmet 모듈 설정
const helmet = require('helmet');
app.use(helmet()); // HTTP 헤더를 설정하여 보안을 강화하는 미들웨어

// boardRouter.js 파일에서 정의된 라우터를 사용하기 위한 설정
const boardRouter = require('./boardRouter.js');
app.use('/board', boardRouter);

// 포트 설정
app.set('port', process.env.PORT || 8080); // 포트 번호를 환경 변수에서 가져오거나 기본값으로 8080을 사용

// 서버 실행
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행'); // 서버를 지정된 포트에서 실행하는 로그 출력
});
