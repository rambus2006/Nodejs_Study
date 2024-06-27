// npm 패키지 'jsonwebtoken'을 설치
// const jwt = require("jsonwebtoken");

// JWT 발급에 사용될 비밀키 정의
const secret = "mySecretKey"

// 페이로드 객체 정의 (=JWT에 포함될 정보)
const payload = {
    "id": "1",
    "username": "john",
    "roles": "admin",
};

// 페이로드와 비밀키를 사용하여 JWT를 생성
// expiresIn 옵션으로 토큰의 유효기간을 1시간으로 설정
// algorithm 옵션으로 해싱 알고리즘을 HS256으로 설정
const token = jwt.sign(payload, secret, { expiresIn: '1h', algorithm: "HS256" });

// 생성된 토큰을 검증
jwt.verify(token, secret, (err, decode) => {
    if (err) {
        // 검증 실패 시 에러를 출력
        console.error(err);
        return;
    }
    // 검증 성공 시 디코딩된 페이로드를 출력
    console.error(decode);
});

// 생성된 토큰을 출력
console.log(token);
/*
[JWT]
- JSON (JsonWebToken)
- 웹 애플리케이션에서 사용되는 인증 및 권한 부여 방식 
- 토큰 기반 인증 방식 
    - 서버에서 세션을 관리할 필요가 없다. 
    - 토큰 자체에 정보가 들어있기 때문에 민감한 정보 관리에 유의해야 한다. 

*/
