function varTest(){
    var vv = 1;
    if(true){
        //이 안에서 var vv로 재정의가 가능하다. 
        var vv = 2;
        console.log(vv);
    }
    console.log(vv) //2가 나온다. 
}
function letTest(){
    let ll = 1;
    if(true){
        // 이 안에서는 letll로 재정의가 불가능하다. 
        let ll =2;
        console.log(ll);
    }
    console.log(ll); //1이 나온다. 
}
console.log("var 실행")