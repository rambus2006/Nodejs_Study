
setTimeout(()=>{
    console.log("0초 경과");
},0)


console.log("111");

setTimeout(()=>{
    console.log("2초 경과-1");
},2000)

setTimeout(()=>{
    console.log("5초 경과");
},5000)

console.log("222");

setTimeout(time2,2000);

console.log("333");

function time2(){
    console.log("2초 경과-2");
}

