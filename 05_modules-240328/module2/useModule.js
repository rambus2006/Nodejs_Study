const {text_odd,text_even} = require("./moduleText") //moduleText 경로에 있는 파일에서 export 한 모듈을 가져온다. 

function checkStringoddOrEven(str){
    if(str.length % 2){   //글자 길이를 2로 나눠서 나머지가 1일 때는 true가 되서 if문 안에 있는 리턴문을 실행한다.
        return text_odd; 
    }
    return text_even; //글자 길이를 2로 나눠서 나머지가 0일 때는 false가 되서 if 문 밖에 있는 리턴문을 실행한다. 
}
console.log("3: ",checkStringoddOrEven("안녕")); //함수호출("안녕") -> "안녕"이 str자리에 들어간다. 
console.log("4:",checkStringoddOrEven("안녕하세요")) //함수호출("안녕하세요") -> "안녕하세요" 가 str 자리에 들어간다. 

module.exports=[checkStringoddOrEven,text_even,text_odd];
