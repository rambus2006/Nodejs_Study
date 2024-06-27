const middle1 = (req,res,next)=>{
    console.log('미들웨어 실행')
    next();
} 
module.exports = middle1;