//미들웨어 함수 
const middle1 = (req,res,next)=>{
    console.log("미들웨어 실행 모듈");
    //다음 미들웨어 또는 라우트 핸들러로 제어를 전달 
    next();
}
//미들웨어 함수 모듈에서 가지고 오기
module.exports = middle1;