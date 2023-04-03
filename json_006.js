//JSON 데이터를 웹페이지로 출력하기
//Parsing --> 다른 형식으로 저장된 데이터를 목적에 맞는 형태의 형식으로 변환하는 것
//JSON Parsing --> JSON 형식의 텍스트 문자열을 목적에 맞게 객체로 변환
window.onload = () => {

    document.getElementById('btn').addEventListener('click',function() {

        console.log('test..');
        //-----------------------------------------------
        let JSON = {
            "book":[{
                "isbn":"123-456-789",
                "author":{
                    "name":"홍길동",
                    "email":"hong@hongkildong.com"
                },
                "editor":{
                    "name":"이순신",
                    "email":"lee@leesoonsin.com"
                },
                "title":"대한민국의 정의는 죽었는가?",
                "category":[
                    "Non-Fiction","IT","Politics"
                ],
                "picture":"images/joe.jpg",
                "description":"백두산 저자의 야심찬 신작! 절찬리에 판매중~",
                "comments":[{
                    "id":"정인봉",
                    "text":"정의에 대해서 알 것 같습니다."
                },
                {
                    "id":"김진경",
                    "text":"무거운 주제를 무겁지 않게 써주셔서 감사합니다."
                },
                {
                    "id":"홍수범",
                    "text":"책 산날 제일 많이 읽었어요..ㅋㅋ"
                },
                {
                    "id":"이정길",
                    "text":"2권은 없나요? 또 쓰시면 또 구매할게요~"
                },
                {
                    "id":"신재원",
                    "text":"대학생이라면 필독서~"
                }],
                "comwinner":["김진경", "이정길", "신재원"],
                "add1":false,
                "add2":true
            }]
            
        }
        JSON = JSON['book'];
        console.log(JSON.length); //1
        console.log(JSON);
        console.log(JSON[0].isbn);
        console.log(JSON[0].editor);
        console.log(JSON[0].category);
        console.log(JSON[0].comments);
        console.log(JSON[0].comments[0]); //첫번째 요소
        console.log(JSON[0].comments[JSON[0].comments.length-1]); //마지막 번째 요소
        console.log(JSON[0].comments.length); 

        console.log('-------------------------------------');
        for(let i=0; i<JSON.length;i++){
            console.log(JSON[i].comments);
            console.log(JSON[i].comwinner);
        }

        console.log('-------------------------------------');
        //ul 태그 노드 생성
        let ul = document.createElement('ul');
        let bookList = document.getElementById('bookList');
        bookList.appendChild(ul);

        for(let i=0; i<JSON.length;i++){
            for(let j=0;j<JSON[i].comments.length;j++){

                //댓글 참가자
                let bookComments = JSON[i].comments[j];
                console.log(bookComments.id + " : " +bookComments.text);

                //##########################################
                //li 태그 노드 생성
                let ul = document.createElement('ul');
                let li = document.createElement('li');

                //텍스트 노드 생성
                let txtNode = document.createTextNode(bookComments.id + " : " +bookComments.text);
                li.appendChild(txtNode);
                ul.appendChild(li);

                //리스트에 붙이기
                bookList.appendChild(li);
                //##########################################
            }
            //당첨자
            console.log(JSON[i].comwinner.join(" , "));
            document.getElementById('bookListWinner').innerHTML = JSON[i].comwinner.join(" , ");
        }
                //-----------------------------------------------
    });
    
};
