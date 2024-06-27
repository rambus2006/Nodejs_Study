// bcrypt 모듈을 불러옴
const bcrypt = require('bcrypt');

// salt의 라운드 수를 설정
const saltRounds = 10; 

// 평문 비밀번호 정의
const myPlaintextPassword = 'my password';

// 비밀번호를 해싱하는 비동기 함수 정의
async function hashPassword() {
    try {
        // 평문 비밀번호를 saltRounds를 사용하여 해싱
        const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

        // 해시된 비밀번호를 메모리에 저장
        const hashedPassword = hash;
        console.log("Hashed Password: ", hashedPassword);
    
        // 사용자가 입력한 비밀번호와 해시된 비밀번호를 비교
        const inputPassword = "my password";
        const match = await bcrypt.compare(inputPassword, hashedPassword);
        console.log("Password match result: ", match);
    } catch (err) {
        // 에러 발생 시 해당 블록에서 에러를 기록
        console.error("Error: ", err);
    }
}

// 비밀번호 해싱 함수 호출
hashPassword();
