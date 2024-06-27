//대괄호 친 건 선생님의 주석 
//[npm install express]
const express = require('express'); //express 모듈을 불러오기
const router = express.Router(); //express.Router를 사용해 라우터를 생성한다. 

// [테스트를 위한 게시글 데이터]
let boardList = []; //게시글 목록을 저장하는 배열 
let numOfBoard = 1; //게시글의 고유 ID를 관리하는 변수 

//{ 게시글 목록 조회 : GET } 
// [게시글 API]
router.get('/',(req,res)=>{ // '/' 경로로 Get 요청이 들어오면 아래명령을 실행
    res.render('boardList',{data:boardList}); //boardList 배열을 boardList 템플릿으로 렌더링한다. 
    //res.send(boardList); //JSON 형식으로 게시글 목록을 보낼 수 있음 
});

//{ 특정 게시글 조회 : GET}
router.get('/:id',(req,res)=>{ // '/:id' 로 Get 요청이 들어오면 아랫줄 실행 
    const findItem = boardList.find((item)=>{
        return item.id == req.params.id //req.params.id 와 id 가 일치하는 게시글을 boardList 에서 찾아 findItem에 저장한다. 
    });
    res.send(findItem); //응답으로 보낸다. 
});

// { 게시글 생성 : POST }
router.post('/',(req,res)=>{ // '/'으로 post 요청이 들어오면 요청 본문에서 게시글 데이터를 추출하여 새로운 게시글 객체를 생성하고 boardList에 추가한다. 
    //board 의 형식 지정(JSON 형식에 데이터를 넣기 )
    const board = {
        "id" : numOfBoard++,  //새로운 게시글의 고유 ID
        "user_id" : req.body.user_id, //요청에서 사용자 ID를 받아온다. 
        "date" : new Date(), //현재 시간을 게시글 작성 시간으로 설정 
        "title" : req.body.title, //요청에서 제목을 받아옴
        "content" : req.body.content //요청에서 내용을 받아옴. 
    }; //형식을 지정해서 board변수에 저장 
    boardList.push(board); //board 변수(새로운 게시글)를 boardList에 추가  

    //res.redirect('/board'); //게시글 목록 페이지로 리디엑션 할 수 있음 
    res.send("글이 등록되었습니다."); //서버에서 클라이언트로 성공 메시지 응답
});

// { 게시글 수정: PUT}
router.put('/:id',(req,res)=>{
    //req.params.id 값을 찾아서 리스트에서 삭제
    const findItem = boardList.find((item)=>{
        return item.id == req.params.id //id로 boardList 에 있는 id와 게시글의 id가 같은 것을 findItem에 저장한다. 
    });
    
    const idx = boardList.indexOf(findItem); // 찾은 게시글의 인덱스를 가져온다. 
    boardList.splice(idx,1); // 기존 게시글을 배열에서 삭제한다. 

    //[리스트에 새로운 요소 추가]
    //board 형식에 새로운 데이터 넣어서 변수 board 에 저장 
    const board = {
        "id": req.params.id,
        "user_id" : req.params.user_id,
        "date":new Date(),
        "title": req.body.title,
        "content":req.body.content
    };  
    boardList.push(board); //boardList배열에 변수 board 넣기 
    //res.redirect('/board');
    res.send("글이 수정되었습니다."); //클라이언트에게 메시지 전달 

});

//{ 게시글 삭제 : DELETE }
router.delete('/:id',(req,res)=>{  //'/:id'로 delete 요청을 받음
    //req.params.id 값 찾아 리스트에서 삭제
    const findItem = boardList.find((item) => {
        return item.id == req.params.id 
    });
    const idx = boardList.indexOf(findItem);
    boardList.splice(idx,1);

    //res.redirect('/board');
    res.send("글이 삭제되었습니다."); //성공 메시지 전달 
});

//라우터 모델을 내보낸다. 
module.exports = router;