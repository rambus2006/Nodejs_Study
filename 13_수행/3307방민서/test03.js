
const express = require('express');

const dotenv = require('dotenv').config();

const app = express();
app.set('port', process.env.PORT || 8081); // 포트 번호를 환경 변수에서 가져오거나 기본값으로 8080을 사용
app.get('/', (request, response) => {
    // 요청 쿠키에 user 데이터가 있는지 확인
    response.send("포트연결완료 ")
});
// 서버 실행
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행'); // 서버를 지정된 포트에서 실행하는 로그 출력
});
