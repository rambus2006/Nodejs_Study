const text_odd ="홀수입니다."; //홀수입니다. string 저장
const text_even="짝수입니다."; //짝수입니다. string 저장

console.log("1 : ",exports === module.exports); //exports는 module.exports를 가리키고, module.exports는 실제객체를 가리킨다. (안에 값x)

module.exports = { //여기서 실제 객체에 값을 넣어준다. 
    text_odd,
    text_even
}