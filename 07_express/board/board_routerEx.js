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

// npm install ejs
app.set('view engine','ejs') //view engin 과 ejs를 쓸 것이다. 
app.set('views',__dirname + '/views'); //views 폴더를 만들어서 보여줄 것이라는 것을 의미한다. 보여주는 파일을 어디에 쓸 지 두번째 파라미터에 써주면된다. 



//포트 설정 
// 만약 process.env.PORT 가 없으면 8083(8080 어디서 쓰고 있어서)번 포트를 기본값으로 설정한다는 의미이다.
app.set('port',process.env.PORT || 8084);

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"빈포트에서 서버 실행")
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const boardRouter = require('./board_router');
app.use('/board',boardRouter);