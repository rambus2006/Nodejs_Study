// http 모듈을 불러옴
const http = require('http');
// fs 모듈의 promises API를 불러옴 (비동기 파일 처리를 위해)
const fs = require('fs').promises;
// url 모듈을 불러옴 (URL 및 URL 처리 관련 기능 제공)
const url = require('url');

// HTTP 서버를 생성
const server = http.createServer();

// 'request' 이벤트 핸들러를 등록 (클라이언트의 요청이 들어올 때마다 실행)
server.on('request', async (req, res) => {
    
    // 클라이언트 요청의 메서드와 URL을 로그에 출력 (주석 처리됨)
    // console.log("method : ", req.method);
    // console.log("url1", req.url);
    // console.log("url2", url.parse(req.url));
    // console.log("url2-1", url.parse(req.url).pathname);
    // console.log("url3", url.parse(req.url).query);

    try {
        // 요청된 URL의 경로명을 추출
        let pathFileName = url.parse(req.url).pathname;
        // 경로명이 루트('/')일 경우, "/base"로 변경
        pathFileName = pathFileName === "/" ? "/base" : pathFileName;
        console.log("test : ", pathFileName);

        // 파비콘 요청을 제외한 경우에만 실행
        if (url.parse(req.url).pathname !== "/favicon.ico") {
            // 요청된 경로에 해당하는 HTML 파일을 비동기로 읽음
            const data = await fs.readFile(`.${pathFileName}.html`);
            // HTTP 응답 헤더 설정 (200 OK, Content-Type: text/html)
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            // 읽어온 HTML 파일 데이터를 응답으로 전송
            res.end(data);
        }
    } catch (err) {
        // 에러 발생 시 에러를 로그에 출력
        console.error(err);
        // HTTP 응답 헤더 설정 (500 Internal Server Error, Content-Type: text/plain)
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        // 에러 메시지를 응답으로 전송
        res.end("err : ", err.message);
    };
});

// 서버를 8080번 포트에서 시작하고 요청 대기
server.listen(8080, () => {
    console.log("여기");
});
