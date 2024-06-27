// http 모듈을 불러옴
const http = require('http');
// fs 모듈의 promises API를 불러옴 (비동기 파일 처리를 위해)
const fs = require('fs').promises;

// HTTP 서버를 생성, 클라이언트의 요청을 비동기 함수로 처리
const server = http.createServer(async (req, res) => {
    try {
        // server2.html 파일을 비동기로 읽음
        const data = await fs.readFile("./server2.html");
        // HTTP 응답 헤더 설정 (200 OK, Content-Type: text/html)
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        // 읽어온 HTML 파일 데이터를 응답으로 전송
        res.end(data);
    } catch (err) {
        // 에러 발생 시 에러를 로그에 출력
        console.error(err);
        // HTTP 응답 헤더 설정 (500 Internal Server Error, Content-Type: text/plain)
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        // 에러 메시지를 응답으로 전송 (올바른 방식으로 수정)
        res.end(`err: ${err.message}`);
    };
});

// 서버를 8088번 포트에서 시작하고 요청 대기
server.listen(8088);

// 'listening' 이벤트 핸들러를 등록 (서버가 시작될 때 실행)
server.on('listening', () => {
    console.log("여기");
});
