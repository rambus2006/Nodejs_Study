//bcrypt라이브러리를 가져온다. 
const bcrypt = require('bcrypt');
// 블로피시(Blowfish) 암호에 기반을 둔 암호화 해시 함수
const saltRounds = 10; //해싱과정에서 사용하는 salt의 반복 횟수를 지정한다. (숫자가 클 수록 해싱과정이 느려지고, 해시의 보안성이 증가한다. )
const myPlaintextPassword = 'my password'; //해시로 바꿀 문장 

//* 해싱: 해시 함수에 문자열 입력값을 넣어서 특정한 값으로 추출하는 것 
// 비밀번호를 해싱하고 비교하는 비동기 함수를 정의 
async function hashPassword() {
  try { //
    // 비밀번호 해싱 (솔트 라운드 횟수 사용)
    const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

    // 해시 값을 메모리에 저장
    const hashedPassword = hash;
    console.log('Hashed Password:', hashedPassword);

    // 비밀번호 비교
    const inputPassword = 'my password';
    const match = await bcrypt.compare(inputPassword, hashedPassword);
    console.log('Password match result:', match);
  }
  // 해당 블록에서 에러에 대한 기록을 남김 
  catch (err) {
    console.error('Error:', err);
  }
}

// hashPassword 함수 호출 (비밀번호 해싱 및 비교 실행)
hashPassword();