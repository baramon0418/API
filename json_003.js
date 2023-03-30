// JSON 데이터를 다루기 위한 JS 기본 사용법2

//[1]: 데이터
const person=[
    {"name":"홍길동", "age":20, "nationality":"한국"},
    {"name":"이순신", "age":30, "nationality":"미국"},
    {"name":"강감찬", "age":40, "nationality":"영국"},
    {"name":"을지문덕", "age":50, "nationality":"프랑스"}
];

console.log(typeof person[0]); //object
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
    console.log(ele);  //배열 요소 값을 출력한다
}

console.log('--------------------------------------------for .. in');
for(let i in person[0]){  //person --> iterable 즉, 반복 가능한 객체가 오면 된다.
    console.log(i);   //배열인 경우 인덱스 0,1,2,3을 출력한다, 객체인 경우 키를 출력한다(name, age, nationality)
}

//[5]: 수정
console.log('--------------------------------------------수정');
person[0].name = "홍길자";
person[0].age = 22;
console.log(`홍길동의 이름이 ${person[0].name}로 수정되었고, 나이는 ${person[0].age}살로 수정되었습니다.`);