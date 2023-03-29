// JSON 데이터를 다루기 위한 JS 기본 사용법

//[1]: 데이터
const person=[
    '{"name":"홍길동", "age":20, "nationality":"한국"}',
    {"name":"이순신", "age":30, "nationality":"미국"},
    {"name":"강감찬", "age":40, "nationality":"영국"},
    {"name":"을지문덕", "age":50, "nationality":"프랑스"}
];

console.log(typeof person[0]); //string
console.log(typeof person[1]); //object


//[2]: 출력
console.log('--------------------------------------------');
console.log(person[1].name+" "+person[1].age+" "+person[1].nationality); 


//[3]: 반복
console.log('--------------------------------------------전개 연산자');
const str1 = "korea";
console.log([...person]);  //전개 연산자
console.log([...person].length);  //4
console.log([...person][1].name); //이순신
console.log([...person][3].name); //을지문덕
console.log([...person][3].age); //50


console.log(...str1);  //전개 연산자
console.log([...str1]); //배열로 보임
console.log({...str1}); //객체로 보임


//[4]: 반복 가능한 객체 --> for .. of, ...(전개 연산자)
console.log('--------------------------------------------for .. of');
for(let ele of person){  //person --> iterable 즉, 반복 가능한 객체가 오면 된다.
    console.log(ele);
}