const mysql = require("mysql2");
const db_info={ //db에 대한 정보 
    host: "localhost",
    port: "3306",
    user: "study_node",
    password: "1111",
    database: "study_node"
}

//객체나 
module.exports={
    init:function (){
        return mysql.createConnection(db_info);
    },
    //연결 되었는지 확인하는 용도 
    connect: function (conn){ //connect를 인자값으로 준다. 
        conn.connect(function (err){
            if(err)console.error("mysql 에러"+err);
            else console.log("mysql connected");
        })
    }
}