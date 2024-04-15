console.log("1")
setTimeout(()=>{
    console.log("2초 경과-1");
},2000)
console.log("2")
setTimeout(()=>{
    console.log("5초 경과")
},5000)
console.log("3")

/*
1 2 3 찍히고 2초 경과-1 5초 경과 가 찍힌다 
*/