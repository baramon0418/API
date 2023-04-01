//JSON 데이터 객체와 문자열로 변환하기
//JSON.parse(), JSON.stringify() --> classify: 분류하다, 구분하다.

//[1]: JSON.parse(jsonText) --> JSON형식의 텍스트 --> 객체로 변환.
let jsonText = '{"name":"홍길동","age":20,"nationlity":"대한민국"}';

console.log("변환전--> " + typeof jsonText); //string
const jsonObj = JSON.parse(jsonText); //객체 변환
console.log("변환후--> " + typeof jsonObj); //object

console.log(jsonObj.name); //홍길동
console.log(jsonObj.age); //20
console.log(jsonObj.nationlity); //대한민국

// console.log(jsonObj.name + " " + jsonObj.age + " " + jsonObj.nationlity);
console.log(`이름과 나이는 ${ jsonObj.name }(${jsonObj.age})이며, 국적은 ${jsonObj.nationlity}이다.`);


//[2]: JSON.strinfify(dataObj) --> 데이터 객체를 --> JSON 형식의 텍스트로 변환.
console.log('-------------------------------------------');
const jsonStr = JSON.stringify(jsonObj);

console.log(jsonStr); //{"name":"홍길동","age":20,"nationlity":"대한민국"}
console.log(typeof jsonStr); //string

