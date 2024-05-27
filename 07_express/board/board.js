const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const morgan = require("morgan");
app.use(morgan('dev'));

const cors = require("cors");
app.use(cors({
    origin:"http://127.0.0.1:5500",
    credentials:true
}));

// 만약 process.env.PORT 가 없으면 8083(8080 어디서 쓰고 있어서)번 포트를 기본값으로 설정한다는 의미이다.
app.set('port',process.env.PORT || 8083);

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"빈포트에서 서버 실행")
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//게시글 데이터
let boardList = [];
// 게시글의 고유값 (id) 값 - 게시글을 쓸 때마다 증가시킨다. 
let numOfBoard = 1;

//게시글 API
app.get('/',(req,res)=>{
    res.send("게시글 API 확인");
});

app.get("/board",(req,res)=>{
    res.send(boardList);
});

app.post("/board",(req,res)=>{
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
app.put("/board/:id",(req,res)=>{
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
app.delete("/board/:id",(req,res)=>{
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