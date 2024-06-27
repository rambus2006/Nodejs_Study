const express = require("express");
//const app = express();
const router = express.Router();

//게시글 데이터
let boardList = [];
// 게시글의 고유값 (id) 값 - 게시글을 쓸 때마다 증가시킨다. 
let numOfBoard = 1;

// 게시글 API
router.get("/",(req,res)=>{
    // boradList로 데이터를 보여줄 건데 그 데이터가 json으로 전달된 데이터값이다. 
    res.render('boardList',{"data":boardList}); 
    // res.send(boardList);
});

router.post("/",(req,res)=>{
    const board = {
        "id":numOfBoard++,
        "user_id":req.body.user_id,
        "date":req.body.date,
        "title":req.body.title,
        "content":req.body.content
    };
    boardList.push(board);
    res.send("글이 등록되었습니다.")
})
router.put("/:id",(req,res)=>{
    //req.parms.id값 리스트 수정하기 
    const findItems = boardList.find((item)=>{
        //id 값을 비교하기 
        return item.id ==req.params.id
    });
    const idx = boardList.indexOf(findItems); 
    boardList.splice(idx,1);

    const board = {
        "id":req.params.id,
        "user_id":req.body.user_id,
        "date":req.body.date,
        "title":req.body.title,
        "content":req.body.content
    };
    boardList.push(board)

    res.send("글이 수정되었습니다. ")
})
router.delete("/:id",(req,res)=>{
    //req.parms.id값 리스트 삭제하기 
    //찾는 요소 finditem 넣기 
    const findItems = boardList.find((item)=>{
        //id 값을 비교하기 
        return item.id ==req.params.id
    });
    // 인덱스 번호를 배열에서 찾아 알려줌 
    const idx = boardList.indexOf(findItems); //배열 요소에 몇번째 있는지 
    boardList.splice(idx,1);
    res.send("글이 삭제되었습니다.")
})

module.exports = router;