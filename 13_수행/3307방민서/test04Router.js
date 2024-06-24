//대괄호 친 건 선생님의 주석 
//[npm install express]
const express = require('express'); //express 모듈을 불러오기
const router = express.Router(); //express.Router를 사용해 라우터를 생성한다. 

// [테스트를 위한 게시글 데이터]
//let boardList = []; //게시글 목록을 저장하는 배열 


router.get('/',(req,res)=>{ // '/' 경로로 Get 요청이 들어오면 아래명령을 실행
    res.send("포트연결완료"); //boardList 배열을 boardList 템플릿으로 렌더링한다. 
    //res.send(boardList); //JSON 형식으로 게시글 목록을 보낼 수 있음 
});
//{ 게시글 목록 조회 : GET } 
// [게시글 API]
router.get('/faq',(req,res)=>{ // '/' 경로로 Get 요청이 들어오면 아래명령을 실행
    res.send("faq페이지입니다."); //boardList 배열을 boardList 템플릿으로 렌더링한다. 
    //res.send(boardList); //JSON 형식으로 게시글 목록을 보낼 수 있음 
});

router.get('/qna',(req,res)=>{ // '/' 경로로 Get 요청이 들어오면 아래명령을 실행
    res.send("qna페이지입니다."); //boardList 배열을 boardList 템플릿으로 렌더링한다. 
    //res.send(boardList); //JSON 형식으로 게시글 목록을 보낼 수 있음 
});

//라우터 모델을 내보낸다. 
module.exports = router;