

// 1. Template Literal  (백틱 사용하기)
// 다음 변수를 이용하여 콘솔에 오른쪽 주석과 같이 나타내시오.
  const name1 = 'Alice';
  const age1 = 30;
  console.log(`제 이름은 ${name1}이고, 나이는 ${age1}살입니다.`);

// 2. 화살표 함수 문제: 주어진 함수를 화살표 함수로 변환해보세요.
// [함수명 : greet_2 ]
  function multiply(a, b) {
    return a * b;
  }
  const greet_2 = (a, b) => a * b;


// 3. 화살표 함수 문제2 _ Arrow Function
  const addNumbers = (num1, num2) => num1 + num2;
  console.log(addNumbers(7, 5));




// 4. object의 속성을 추가하고 활용하기 : 주어진 객체에 새로운 속성을 추가해보세요.
  const person4 = {
    name: 'Alice',
    age: 25
  };
  
  // 4-1. person 객체에 height 속성을 추가해보세요 (height 값은 170)
  person4.height = 170;

  // 4-2. person 객체의 name 속성과 age 속성을 출력해보세요
  console.log(person4.name);
  console.log(person4.age);


// 5. 동등 연산자와 일치 연산자
  console.log(1 == "1"); 
  console.log(1 === "1"); 
  // 5-1. 다음 값이 다른 이유는?
// 동등 연산자(==)는 값의 동등 여부를 판단할 때 타입 변환을 수행합니다.
// 일치 연산자(===)는 값과 타입 모두를 비교하여 동일한지 여부를 판단합니다.
console.log("값이 다른 이유는 타입 변환이 수행되기 때문입니다.");

// 6. null과 undefined
  let aa = null;
  let bb;
  console.log(aa == bb); 
  console.log(aa === bb); 
  // 6-1. 다음 값이 다른 이유는?
  // null과 undefined는 타입이 다르기 때문에 일치 연산자(===)를 사용하면 false가 반환됩니다.
  console.log("값이 다른 이유는 타입이 다르기 때문입니다.");


// 7. JSON 데이터를 객체로 그리고 문자열로 바꾸는 퀴즈:
  // JSON 형식의 문자열
  const jsonStr7 = '{"name":"Alice","age":30}';

  // JSON 문자열을 객체로 변환하여 로그에 나타내보세요.
  const obj7 = JSON.parse(jsonStr7);
  console.log(obj7);
  // 객체의 age 값을 출력해보세요.
  console.log(obj7.age);

  // 객체를 JSON 문자열로 변환하여 로그에 나타내보세요.
  const jsonString7 = JSON.stringify(obj7);
  console.log(jsonString7);

// 8. Nullish Coalescing Operator
  const name8 = '';
  const displayName1 = name8 ?? 'name';
  const displayName2 = name8 || 'name';

  console.log("displayName1 : " + displayName1); 
  console.log("displayName2 : " + displayName2);

  // 8-1. 다음 값이 다른 이유는?
  // Nullish Coalescing 연산자(??)는 null 또는 undefined인 경우에만 대체값을 반환합니다.
  // 빈 문자열('')은 falsy한 값으로 취급되지만, Nullish Coalescing 연산자는 falsy한 값이어도 대체값으로 사용하지 않습니다.
  console.log("값이 다른 이유는 Nullish Coalescing 연산자가 빈 문자열을 대체값으로 사용하지 않기 때문입니다.");





  //----

// 10. Nullish Coalescing Operator
  const a = 0;
  const b = "";
  const c = null;
  const d = undefined;
  
  const result = a ?? b ?? c ?? d;
  
  console.log(result); // 결과는 무엇일까요?
  // result 값의 이유는 무엇일까요?
  console.log("그 이유는...") 



// 11. numbers 배열의 각 요소를 sum 변수에 더하는 forEach 메서드를 작성해보세요
  const numbers11 = [1, 2, 3, 4, 5];
  let sum = 0;
  
  // 작성

  console.log(sum); // 결과는 무엇일까요?
  

// 12. for...of : numbers 배열의 각 요소를 출력하고, 값이 3인 요소를 찾아 target 변수에 할당하는 for...of 문을 작성해보세요

  const numbers12 = [1, 2, 3, 4, 5];
  let target = null;
  
  // 작성
  
  console.log("3이 출력되어야 함 : ",target); // 결과는 무엇일까요?
  
// 13. forEach : fruits 배열의 각 요소를 콘솔에 출력하는 forEach 메서드를 작성해보세요
  const fruits = ['apple', 'banana', 'orange'];

  // 작성 


// 14. Spread Operator
  const numbers14 = [1, 2, 3, 4, 5];
  const newNumbers14 = [...numbers14, 6];
  console.log(newNumbers14);

// 15. Destructuring 
  const person = { name: 'John', age: 25, city: 'Seoul' };
  const { name, age } = person;
  console.log(name, age); // 결과는 무엇일까요?


  