function test_var(){
    var vv = 1;
    if(vv){ //
        var vv =2;
        console.log(vv); //2
    }
    console.log(vv); //2
}
test_var()
// function test_let(){
//     let ll=1;
//     if(ll){
//         let ll=2;
//         console.log(ll);
//     }
//     console.log(ll);
// }